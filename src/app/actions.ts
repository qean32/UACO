'use server'

import { tableResponse, generalTableItem } from "@/@types"
import { DEFAULT_TAKE } from "@/config"
import { Event, Role } from "@root/prisma/generated/prisma/browser"
import { prisma } from "@root/prisma/prisma"

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
export const getGeneralTableAction = async ({ course, date, department, group, page, EventId }: generaltableProps): Promise<getGeneralTableResponse> => {
    try {
        const skip = (page || 0) * DEFAULT_TAKE
        const filter = {
            role: Role.STUDENT,
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
                // @ts-ignore
                { ...(EventId && EventId != "null" ? { estimationsEvents: { some: { EventId: Number(EventId) } } } : null) },
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
        console.log('[getGeneralTableAction] Server error', error);
        throw (error)
    }
}
