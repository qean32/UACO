'use server'

import { generalTableItem, supervisorTableItemType, estimationTableItem, studentTableItem, tableResponse, userInfo } from "@/@types"
import { Event, Role } from "@root/prisma/generated/prisma/browser"
import { prisma } from "@root/prisma/prisma"

const DEFAULT_TAKE = 20

export const createEventAction = async (data: Pick<Event, "SupervisorId" | "date" | "name">) => {
    try {
        const event = await prisma.event.create({ data: { ...data, SupervisorId: Number(data.SupervisorId) } })
        return event
    } catch (error) {
        console.log('[createEvent] Server error', error);
    }
}

export const getUserInfo = async (id: number): Promise<userInfo | null> => {
    try {
        // @ts-ignore
        return prisma.user.findFirst(
            {
                where: { id: Number(id) },
                omit: { password: true, createdAt: true, updateadAt: true },
                include: {
                    Group: { select: { semester: true, Department: { select: { code: true, name: true } } } }
                },
            }
        )
    } catch (error) {
        console.log('[getUserInfo] Server error', error);
        throw (error)
    }
}

export const getRole = async (id: number): Promise<{ role: Role } | null> => {
    try {
        return prisma.user.findFirst({ where: { id: Number(id) }, select: { role: true } })
    } catch (error) {
        console.log('[getRole] Server error', error);
        throw (error)
    }
}

type generalTableFilters = {
    date?: string,
    group?: string
    department?: string
    course?: number
    page?: number
}
type generaltableProps = {
    EventId: number
} & generalTableFilters
type getGeneralTableResponse = {
    column: Pick<Event, "name" | "id">[]
} & tableResponse<generalTableItem[]>
export const getGeneralTable = async ({ course, date, department, group, page, EventId }: generaltableProps): Promise<getGeneralTableResponse> => {
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
                { ...(EventId ? { estimationsEvents: { some: { EventId: Number(EventId) } } } : null) }
            ],
        }
        const events = await prisma.event.findMany({
            select: {
                id: true,
                name: true
            },
            where: { ...(date ? { date } : null) },
            orderBy: { date: "desc" }
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

        return { items, column: events, end: skip + DEFAULT_TAKE >= await prisma.user.count({ where: filter }) }
    } catch (error) {
        console.log('[getGeneralTable] Server error', error);
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
            orderBy: { date: "desc" }
        })

        const estimations = await prisma.estimationEvent.findMany(
            {
                where: { UserId: Number(userId) },
                select: {
                    Event: { select: { name: true, id: true, date: true } },
                    estimation: true,
                },
                take: DEFAULT_TAKE,
                skip,
                orderBy: { createdAt: "desc" }
            }
        )

        const avgAndCount = await prisma.estimationEvent.groupBy({
            by: "EventId",
            _avg: { estimation: true },
            _count: true,
        })

        const _map = new Map(avgAndCount.map(item => [item.EventId, item]))
        const map = new Map(estimations.map(item => [item.Event.id, item]))

        // @ts-ignore
        let items: estimationTableItem[] = events.map(event_item => {
            const search = map.get(event_item.id)
            const _search = _map.get(event_item.id)

            if (!search) {
                return {
                    estimation: 0,
                    Event: event_item,
                    id: event_item.id,
                    avg: _search?._avg.estimation ?? 0,
                    count: _search?._count ?? 0
                }
            }
            return {
                ...search,
                id: search?.Event.id,
                avg: _search?._avg.estimation ?? 0,
                count: _search?._count ?? 0
            }
        })

        return { items, end: skip + DEFAULT_TAKE >= await prisma.event.count() }
    } catch (error) {
        console.log('[getEstimationTable] Server error', error);
        throw (error)
    }
}

export const getSupervisorTable = async ({ page, countEstimations, avg }: { page: number, countEstimations?: boolean, avg?: boolean }): Promise<tableResponse<supervisorTableItemType[]>> => {
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
            skip,
            orderBy: { ...(countEstimations ? { estimationsEvents: { _count: "desc" } } : { date: "desc" }) }
        })
        const avgAndCount = await prisma.estimationEvent.groupBy({
            by: "EventId",
            orderBy: { _avg: { estimation: "desc" } },
            _avg: { estimation: true },
            _count: true,
        })
        const _map = new Map(avgAndCount.map(item => [item.EventId, item]))
        // @ts-ignore
        let items: supervisorTableItemType[] = events.map(item => {
            const search = _map.get(item.id)
            return { ...item, avg: search?._avg.estimation ?? 0, count: search?._count ?? 0 }
        })
        if (avg) {
            items = items.sort((a, b) => b.avg - a.avg)
        }

        return { items, end: skip + DEFAULT_TAKE >= await prisma.event.count() }
    } catch (error) {
        console.log('[getSupervisorTable] Server error', error);
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
                skip,
                orderBy: { createdAt: "asc" }
            },
        )

        return { items: estimations, end: skip + DEFAULT_TAKE >= await prisma.estimationEvent.count({ where: { UserId: Number(userId) } }) }
    } catch (error) {
        console.log('[getStudentTable] Server error', error);
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
        console.log('[estimationEvent] Server error', error);
        throw (error);
    }
}
