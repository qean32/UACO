'use server'

import { sortingDirectionEnum, tableResponse, supervisorTableItemType } from "@/@types";
import { DEFAULT_TAKE, Period } from "@/config";
import { convertDayToSecond } from "@/lib/helpers";
import { Department, Event, Group, Role, User } from "@root/prisma/generated/prisma/browser";
import { prisma } from "@root/prisma/prisma";
var randomEmail = require('random-email');
var randomPassword = require('generate-password');

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
        return true
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
            return { ...item, email: randomEmail("yaviak.mck"), password: randomPassword.generate({ length: 10 }), dateOfBirth: new Date(item.dateOfBirth) }
        })
        const students = await prisma.user.createMany({ data: addedPasswordAndEmail })

        return students
    } catch (error) {
        console.log('[createEvent] Server error', error);
        throw (error)
    }
}

export const createSupervisorAction = async (item: Pick<User, "firstName" | "lastName" | "sureName" | "sex" | "dateOfBirth">) => {
    try {
        const supervisor = await prisma.user.create({
            data: {
                ...item,
                email: randomEmail("yaviak.mck"),
                password: randomPassword.generate({ length: 10 }),
                dateOfBirth: new Date(item.dateOfBirth),
                role: Role.SUPERVISOR
            }
        })

        return supervisor
    } catch (error) {
        console.log('[createSupervisor] Server error', error);
        throw (error)
    }
}

export const semesterMoveAction = async (move: 1 | -1) => {
    try {
        const groups = await prisma.group.findMany()
        const collapsed = []

        groups.forEach(async item => {
            if (move) {
                if (item.semester == 10) {
                    collapsed.push(item)
                    return
                }
                await prisma.group.update({ data: { semester: { increment: move } }, where: { code: item.code } })
            }
            if (!move) {
                if (item.semester == 1) {
                    collapsed.push(item)
                    return
                }
                await prisma.group.update({ data: { semester: { increment: move } }, where: { code: item.code } })
            }
        })

        return
    } catch (error) {
        console.log('[semesterMoveAction] Server error', error);
        throw (error)
    }
}

export const updateGroupAction = async (data: Omit<Group, "createdAt" | "updateadAt">) => {
    try {
    } catch (error) {
        console.log('[updateGroupAction] Server error', error);
        throw (error)
    }
}

export const updateDepartmentAction = async (data: Department) => {
    try {
    } catch (error) {
        console.log('[updateDepartmentAction] Server error', error);
        throw (error)
    }
}
