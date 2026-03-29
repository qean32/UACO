'use server'

import { tableResponse, generalTableItem } from "@/@types"
import { DEFAULT_TAKE } from "@/config"
import { xlsx } from "@/lib/helpers/file"
import { Event, Role, User } from "@root/prisma/generated/prisma/browser"
import { prisma } from "@root/prisma/prisma"

type generalTableFilters = {
    date?: string,
    group?: string
    department?: string
    course?: number
    page?: number
}
type generaltableProps = {
    EventId?: number
    all?: boolean
} & generalTableFilters
type getGeneralTableResponse = {
    column: Pick<Event, "name" | "id">[]
} & tableResponse<generalTableItem[]>
export const getGeneralTableAction = async ({ course, date, department, group, page, EventId, all }: generaltableProps): Promise<getGeneralTableResponse> => {
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
            take: !all ? DEFAULT_TAKE : undefined,
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

export const searchStudentsAction = async ({ search }: { search: string }): Promise<Pick<User, "firstName" | "lastName" | "sureName" | "id">[]> => {
    try {
        const students = await prisma.user.findMany({
            take: 6,
            select: { firstName: true, lastName: true, sureName: true, id: true },
            where: {
                AND: [
                    { role: Role.STUDENT },
                    {
                        OR: [
                            { firstName: { contains: search } },
                            { lastName: { contains: search } },
                            { sureName: { contains: search } },
                        ]
                    },
                ]
            }
        })

        return students
    } catch (error) {
        console.log('[searchStudentsAction] Server error', error);
        throw (error)
    }
}

export const xlsxAction = async (q: generaltableProps) => {
    try {
        const { column, items } = await getGeneralTableAction({ ...q, all: true, page: 0 })
        const name = xlsx([["Студент", ...column.map(item => item.name)],
        ...items.map(item => [`${item.User.firstName} ${item.User.lastName} ${item.User.sureName}`, ...item.estimationsEvent.map(item => item.estimation ? "Да" : "Нет")]
        )])

        return name
    } catch (error) {
        console.log('[xlsxAction] Server error', error);
        throw (error)
    }
}
