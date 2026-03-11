'use server'

import { generalTableItem, supervisorTableItemType, estimationTableItem, studentTableItem, tableResponse } from "@/@types"
import { Event, Role, User } from "@root/prisma/generated/prisma/browser"
import { prisma } from "@root/prisma/prisma"

const DEFAULT_TAKE = 20

export const createEvent = async (data: Event) => {
    try {
        const event = await prisma.event.create({ data })
        return event
    } catch (error) {
        console.log('[CreateEvent] Server error', error);
    }
}

export const getUserInfo = async (id: number): Promise<User | null> => {
    try {
        // @ts-ignore
        return prisma.user.findFirstOrThrow(
            {
                where: { id: Number(id) },
                omit: { password: true, createdAt: true, updateadAt: true },
                include: {
                    Group: { select: { semester: true, Department: { select: { code: true, name: true } } } }
                },
            }
        )
    } catch (error) {
        console.log('[CreateEvent] Server error', error);
        throw (error)
    }
}

export const getRole = async (id: number): Promise<{ role: Role } | null> => {
    try {
        return prisma.user.findFirst({ where: { id: Number(id) }, select: { role: true } })
    } catch (error) {
        console.log('[CreateEvent] Server error', error);
        throw (error)
    }
}

export const getGeneralTable = async ({ course, date, department, group, page }: {
    date?: string,
    group?: string
    department?: string
    course?: number
    page?: number
}): Promise<{ items: generalTableItem[], column: Pick<Event, "name" | "id">[], end: boolean }> => {
    try {
        const skip = page ? page * DEFAULT_TAKE : 0
        const filter = {
            AND: [
                {
                    ...(course ? {
                        OR: [
                            { Group: { semester: course * 2 } },
                            { Group: { semester: course * 2 - 1 } }
                        ]
                    } : null)
                },
                { ...(department ? { Group: { Department: { name: department } } } : null) },
                { ...(group ? { GroupCode: group } : null) },
            ],
        }
        const events = await prisma.event.findMany({
            select: {
                id: true,
                name: true
            },
            where: { ...(date ? { date } : null) }
        })
        const students = await prisma.user.findMany({
            select: {
                estimationsEvents: { select: { EventId: true, estimation: true } },
                firstName: true, lastName: true, sureName: true,
                id: true
            },
            take: DEFAULT_TAKE,
            skip,
            where: filter,
            orderBy: { firstName: "asc" }
        })
        let items: generalTableItem[] = students.map(student_item => {
            return {
                User: { firstName: student_item.firstName, sureName: student_item.sureName, lastName: student_item.lastName, id: student_item.id, },
                estimationsEvent: [
                    ...student_item.estimationsEvents,
                    ...events.map(event_item => {
                        return { EventId: event_item.id, estimation: 0 }
                    }).filter(filter_item => !student_item.estimationsEvents.some(some_item => some_item.EventId == filter_item.EventId))
                ]
            }
        })

        return { items, column: events, end: skip >= await prisma.user.count({ where: filter }) }
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const getEstimationTable = async ({ page, userId }: { userId: number, page: number }): Promise<tableResponse<estimationTableItem[]>> => {
    try {
        const skip = page ? page * DEFAULT_TAKE : 0
        const events = await prisma.event.findMany({
            select: {
                id: true,
                name: true,
                date: true
            },
            take: DEFAULT_TAKE,
            skip,
            orderBy: { createdAt: "asc" }
        })
        const estimations = await prisma.estimationEvent.findMany(
            {
                where: { UserId: userId },
                select: {
                    Event: { select: { name: true, id: true, date: true } },
                    estimation: true,
                },
                take: DEFAULT_TAKE,
                skip,
            }
        )
        const map = new Map(estimations.map(item => [item.Event.id, item]))
        // @ts-ignore
        let items: estimationTableItem[] = events.map(event_item => {
            if (!map.get(event_item.id)) {
                return {
                    estimation: 0,
                    Event: event_item,
                    id: event_item.id
                }
            }
            return map.get(event_item.id)
        })

        return { items, end: skip >= await prisma.estimationEvent.count() }
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const getSupervisorTable = async ({ page }: { page: number }): Promise<tableResponse<supervisorTableItemType[]>> => {
    try {
        const skip = page ? page * DEFAULT_TAKE : 0
        const events = await prisma.event.findMany({
            select: {
                name: true,
                id: true,
                date: true,
                SupervisorId: true
            },
            take: DEFAULT_TAKE,
            skip
        })

        return { items: events, end: skip >= await prisma.event.count() }
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const getStudentTable = async ({ page, userId }: { userId: number, page: number }): Promise<tableResponse<studentTableItem[]>> => {
    try {
        const skip = page ? page * DEFAULT_TAKE : 0
        const estimations = await prisma.estimationEvent.findMany(
            {
                where: { UserId: Number(userId) },
                select: {
                    Event: { select: { name: true, id: true, date: true } },
                    estimation: true,
                    id: true
                },
                take: DEFAULT_TAKE,
                skip
            },
        )

        return { items: estimations, end: skip >= await prisma.estimationEvent.count({ where: { UserId: Number(userId) } }) }
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const estimationEvent = async ({ estimation, EventId, UserId }: { UserId: number, EventId: number, estimation: number }) => {
    try {
        await prisma.estimationEvent.create({
            data: {
                estimation: estimation,
                EventId: EventId,
                UserId: UserId
            }
        })
    } catch (error) {
        console.log('[CreateEvent] Server error', error);
        throw (error);
    }
}
