'use server'

import { sortingDirectionEnum, tableResponse, supervisorTableItemType } from "@/@types";
import { DEFAULT_TAKE, Period } from "@/config";
import { addFieldToUser, convertDayToSecond } from "@/lib/helpers";
import { convertUserToString, docx } from "@/lib/helpers/file";
import { Department, Event, Group, Role, User } from "@root/prisma/generated/prisma/browser";
import { prisma } from "@root/prisma/prisma";
import { hashSync } from "bcrypt";

export const createEventAction = async (data: Pick<Event, "SupervisorId" | "date" | "name">) => {
    try {
        const event = await prisma.event.create({ data: { ...data, SupervisorId: Number(data.SupervisorId) } })
        return event
    } catch (error) {
        console.log('[createEvent] Server error', error);
        throw (error)
    }
}

export const deleteEventAction = async ({ id }: { id: number }) => {
    try {
        const event = await prisma.event.delete({ where: { id } })
        return event
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
        await prisma.user.createMany({ data: addedPasswordAndEmail.map(item => { return { ...item, password: hashSync(item.password, 6) } }) })
        const path = docx(convertUserToString(addedPasswordAndEmail))

        return path
    } catch (error) {
        console.log('[createEvent] Server error', error);
        throw (error)
    }
}

export const createSupervisorAction = async (item: Pick<User, "firstName" | "lastName" | "sureName" | "sex" | "dateOfBirth">) => {
    try {
        const addedPasswordAndEmail = addFieldToUser(item)
        await prisma.user.create({
            data: { ...addedPasswordAndEmail, password: hashSync(addedPasswordAndEmail.password, 6), role: Role.SUPERVISOR }
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
            return true
        }
        if (move == -1) {
            await prisma.group.updateMany({ data: { semester: { increment: move } }, where: { semester: { not: 1 } } })
            return true
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
        await prisma.group.update({ data: { code, DepartmentCode, semester: Number(semester) }, where: { code: primaryCode } })
        return true
    } catch (error) {
        console.log('[updateGroupAction] Server error', error);
        throw (error)
    }
}

type updateDepartmentActionProps = Omit<Department, "createdAt" | "updateadAt"> & primaryCode
export const updateDepartmentAction = async ({ name, code, primaryCode }: updateDepartmentActionProps) => {
    try {
        await prisma.department.update({ data: { code, name }, where: { code: primaryCode } })
        return true
    } catch (error) {
        console.log('[updateDepartmentAction] Server error', error);
        throw (error)
    }
}
