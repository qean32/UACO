'use server'

import { sortingDirectionEnum, tableResponse, supervisorTableItemType } from "@/@types";
import { DEFAULT_TAKE, PASSWORD_HASH_LENGTH, Period } from "@/config";
import { addFieldToUser, convertDayToSecond } from "@/lib/helpers";
import { convertUserToString, docx } from "@/lib/helpers/file";
import { Department, Event, Group, Role, User } from "@root/prisma/generated/prisma/browser";
import { prisma } from "@root/prisma/prisma";
import { hashSync } from "bcrypt";

export const createEventAction = async (data: Pick<Event, "SupervisorId" | "date" | "name">) => {
    try {
        const event = await prisma.event.create({ data: { ...data, SupervisorId: Number(data.SupervisorId) }, omit: { createdAt: true } })
        return { data: { ...event, avg: 0, count: 0 }, message: "Мероприятие создано", description: "Мы добавили мероприятие" }
    } catch (error) {
        console.log('[createEvent] Server error', error);
        throw (error)
    }
}

export const deleteEventAction = async ({ id }: { id: number }) => {
    try {
        const event = await prisma.event.delete({ where: { id } })
        return { data: event, message: "Событие удалено", description: "Вы удалили событие" }
    } catch (error) {
        console.log('[deleteEvent] Server error', error);
        throw (error)
    }
}

type getSupervisorTableSortingType = "avg" | "countEstimations"
export const getSupervisorTableAction = async ({ page, sort, direction = sortingDirectionEnum.desc, period }
    : { page: number, sort?: getSupervisorTableSortingType, direction?: sortingDirectionEnum, period?: Period }):
    Promise<tableResponse<supervisorTableItemType[]>> => {
    try {
        const skip = (page || 0) * DEFAULT_TAKE

        if (sort == "avg" || sort == "countEstimations") {
            const groupBy = await prisma.estimationEvent.groupBy({
                by: ['EventId'],
                _avg: { estimation: true },
                _count: true,
                orderBy: sort == "avg"
                    ? [{ _avg: { estimation: direction } }]
                    : [{ _count: { estimation: direction } }]
            })

            const paginatedGroups = groupBy.slice(skip, skip + DEFAULT_TAKE)
            const eventIds = paginatedGroups.map(g => g.EventId)
            const groupMap = new Map(paginatedGroups.map(g => [g.EventId, g]))

            const events = await prisma.event.findMany({
                where: {
                    AND: [
                        { id: { in: eventIds } },
                        { ...(period === Period.Week ? { date: { gte: new Date(Date.now() - convertDayToSecond(7)) } } : null) },
                        { ...(period === Period.Month ? { date: { gte: new Date(Date.now() - convertDayToSecond(30)) } } : null) }
                    ]
                },
                select: { name: true, id: true, date: true, SupervisorId: true }
            })

            const eventMap = new Map(events.map(item => [item.id, item]))

            const items: supervisorTableItemType[] = eventIds.map((id: number) => {
                const searchAvgAndCount = groupMap.get(id)
                return {
                    ...eventMap.get(id)!,
                    avg: searchAvgAndCount!._avg!.estimation ?? 0,
                    count: searchAvgAndCount!._count ?? 0
                }
            })

            return { items, end: skip + DEFAULT_TAKE >= groupBy.length }
        } else {
            const events = await prisma.event.findMany({
                select: { name: true, id: true, date: true, SupervisorId: true },
                take: DEFAULT_TAKE,
                skip,
                where: {
                    AND: [
                        { ...(period === Period.Week ? { date: { gte: new Date(Date.now() - convertDayToSecond(7)) } } : null) },
                        { ...(period === Period.Month ? { date: { gte: new Date(Date.now() - convertDayToSecond(30)) } } : null) }
                    ]
                },
                orderBy: { date: direction }
            })
            const avgAndCount = await prisma.estimationEvent.groupBy({
                by: 'EventId',
                _avg: { estimation: true },
                _count: true
            })
            const avgAndCountMap = new Map(avgAndCount.map(item => [item.EventId, item]))
            const items = events.map(item => ({
                ...item,
                avg: avgAndCountMap.get(item.id)?._avg?.estimation ?? 0,
                count: avgAndCountMap.get(item.id)?._count ?? 0
            }))

            return { items, end: skip + DEFAULT_TAKE >= await prisma.event.count() }
        }
    } catch (error) {
        console.log('[getSupervisorTableAction] Server error', error);
        throw (error)
    }
}

export const createStudentsAction = async (data: Pick<User, "GroupCode" | "dateOfBirth" | "firstName" | "lastName" | "sureName" | "sex">[]) => {
    try {
        const addedPasswordAndEmail = data.map(item => {
            return addFieldToUser(item)
        })
        await prisma.user.createMany({ data: addedPasswordAndEmail.map(item => { return { ...item, password: hashSync(item.password, PASSWORD_HASH_LENGTH) } }) })
        const path = docx(convertUserToString(addedPasswordAndEmail))

        return path
    } catch (error) {
        console.log('[createStudentsAction] Server error', error);
        throw (error)
    }
}

export const createGroupsAction = async (data: Pick<Group, "DepartmentCode" | "code">[]) => {
    try {
        await prisma.group.createMany({ data })
        return { data: data.map(item => { return { ...item, semester: 1 } }), message: "Группы добавлены", description: "Вы добавили группы" }
    } catch (error) {
        console.log('[createGroupsAction] Server error', error);
        throw (error)
    }
}

export const createDepartmentsAction = async (data: Pick<Department, "code" | "name">[]) => {
    try {
        await prisma.department.createMany({ data })
        return { data, message: "Отделения успешно добавлены!", description: "Вы добавили отделения" }
    } catch (error) {
        console.log('[createDepartmentsAction] Server error', error);
        throw (error)
    }
}

export const createSupervisorAction = async (item: Pick<User, "firstName" | "lastName" | "sureName" | "sex" | "dateOfBirth">) => {
    try {
        const addedPasswordAndEmail = addFieldToUser(item)
        await prisma.user.create({
            data: { ...addedPasswordAndEmail, password: hashSync(addedPasswordAndEmail.password, PASSWORD_HASH_LENGTH), role: Role.SUPERVISOR }
        })
        const path = docx(convertUserToString([addedPasswordAndEmail]))

        return path
    } catch (error) {
        console.log('[createSupervisorAction] Server error', error);
        throw (error)
    }
}

export const semesterMoveAction = async (move: 1 | -1) => {
    try {
        if (move == 1) {
            await prisma.group.updateMany({ data: { semester: { increment: move } }, where: { semester: { not: 8 } } })
            return { message: "Вы перевели группы на следующий семестр", description: "Дело сделано" }
        }
        if (move == -1) {
            await prisma.group.updateMany({ data: { semester: { increment: move } }, where: { semester: { not: 1 } } })
            return { message: "Вы откатили семетры групп", description: "Дело сделано" }
        }
    } catch (error) {
        console.log('[semesterMoveAction] Server error', error);
        throw (error)
    }
}

type primaryCode = { primaryCode: string }
type updateGroupActionProps = Omit<Group, "createdAt" | "updateadAt"> & primaryCode
export const updateGroupAction = async ({ DepartmentCode, code, semester, primaryCode }: updateGroupActionProps) => {
    try {
        const group = await prisma.group.update({ data: { code, DepartmentCode, semester: Number(semester) }, where: { code: primaryCode }, omit: { createdAt: true, updateadAt: true } })
        return { data: { ...group, primaryCode }, message: "Группа обновлена", description: "Вы изменили группу" }
    } catch (error) {
        console.log('[updateGroupAction] Server error', error);
        throw (error)
    }
}

type updateDepartmentActionProps = Omit<Department, "createdAt" | "updateadAt"> & primaryCode
export const updateDepartmentAction = async ({ name, code, primaryCode }: updateDepartmentActionProps) => {
    try {
        const department = await prisma.department.update({ data: { code, name }, where: { code: primaryCode } })
        return { data: { ...department, primaryCode }, message: "Отделение изменено", description: "Вы изменили отделение" }
    } catch (error) {
        console.log('[updateDepartmentAction] Server error', error);
        throw (error)
    }
}

export const deleteDepartmentAction = async ({ code }: { code: string }) => {
    try {
        await prisma.department.delete({ where: { code } })
        return { message: "Отделение удалено", description: "Вы удалили отделение", code }
    } catch (error) {
        console.log('[deleteDepartmentAction] Server error', error);
        throw (error)
    }
}

export const deleteGroupAction = async ({ code }: { code: string }) => {
    try {
        await prisma.group.delete({ where: { code } })
        return { message: "Группа удалена", description: "Вы удалили группу" }
    } catch (error) {
        console.log('[deleteGroupAction] Server error', error);
        throw (error)
    }
}
