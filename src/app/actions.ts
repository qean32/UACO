'use server'

import { generalTableItem, SupervisorTableItemType, estimationTableItem, studentTableItem } from "@/@types"
import { Event, Role, User } from "@root/prisma/generated/prisma/browser"
import { prisma } from "@root/prisma/prisma"


export const createEvent = async (data: Event) => {
    try {
        const event = await prisma.event.create({ data })

        return event
    } catch (error) {
        console.log('[CreateEvent] Server error', error);
    }
}

export const getUserInfo = async (id: number): Promise<any | null> => {
    return prisma.user.findFirst(
        {
            where: { id: Number(id) },
            omit: { password: true, createdAt: true, updateadAt: true },
            include: {
                Group: { select: { semester: true, Department: { select: { code: true, name: true } } } }
            },
        }
    )
}

export const getRole = async (id: number): Promise<{ role: Role } | null> => {
    return prisma.user.findFirst({ where: { id: Number(id) }, select: { role: true } })
}

export const getGeneralTable = async ({ course, date, department, group }: {
    date?: string,
    group?: number
    department?: number
    course?: number
}): Promise<{ items: generalTableItem[], column: Pick<Event, "name" | "id">[] }> => {
    try {
        const events = await prisma.event.findMany({
            select: {
                id: true,
                name: true
            }
        })
        const students = await prisma.user.findMany({
            select: {
                estimationsEvents: { select: { EventId: true, estimation: true } },
                firstName: true, lastName: true, sureName: true,
                id: true
            },
            take: 20,
        })
        let items: generalTableItem[] = students.map(student_item => {
            return {
                User: { firstName: student_item.firstName, sureName: student_item.sureName, lastName: student_item.lastName, id: student_item.id, },
                estimationsEvent: Array.from(new Set([
                    ...student_item.estimationsEvents,
                    ...events.map(event_item => {
                        return { EventId: event_item.id, estimation: 0 }
                    }).filter(filter_item => !student_item.estimationsEvents.some(some_item => some_item.EventId == filter_item.EventId))
                ]))
            }
        })

        return { items, column: events }
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const getEstimationTable = async (userId: number): Promise<
    estimationTableItem[]
    |
    undefined
> => {
    try {
        const events = await prisma.event.findMany({
            select: {
                id: true,
                name: true,
                date: true
            }
        })
        const user = await prisma.user.findFirst(
            {
                where: { id: userId },
                select: {
                    estimationsEvents: {
                        select: {
                            Event: { select: { name: true, id: true, date: true } },
                            estimation: true
                        },
                    }
                }
            },
        )
        const map = new Map(user?.estimationsEvents.map(item => [item.Event.id, item]))
        // @ts-ignore
        let items: estimationTableItem[] = events.map(event_item => {
            if (!map.get(event_item.id)) {
                return {
                    estimation: 0,
                    Event: event_item
                }
            }
            return map.get(event_item.id)
        })

        if (items) {
            return items
        }
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const getSupervisorTable = async (): Promise<SupervisorTableItemType[] | undefined> => {
    try {
        const events = await prisma.event.findMany({
            select: {
                name: true,
                id: true,
                date: true,
                SupervisorId: true
            }
        })

        if (events)
            return events
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const getStudentTable = async (userId: number): Promise<
    studentTableItem[]
    |
    undefined
> => {
    try {
        const user = await prisma.user.findFirst(
            {
                where: { id: Number(userId) },
                select: {
                    estimationsEvents: {
                        select: {
                            Event: { select: { name: true, id: true, date: true } },
                            estimation: true
                        },
                    }
                }
            },
        )

        if (user) {
            return user?.estimationsEvents
        }
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const estimationEvent = async ({ estimation, EventId, UserId }: { UserId: number, EventId: number, estimation: number }) => {
    await prisma.estimationEvent.create({
        data: {
            estimation: estimation,
            EventId: EventId,
            UserId: UserId
        }
    })
}