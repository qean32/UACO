'use server'

import { generalTableItem, SupervisorTableItem, estimationTableItem, studentTableItem } from "@/@types"
import { Event } from "@root/prisma/generated/prisma/browser"
import { prisma } from "@root/prisma/prisma"


export const createEvent = async (data: Event) => {
    try {
        const event = await prisma.event.create({ data })

        return event
    } catch (error) {
        console.log('[CreateEvent] Server error', error);
    }
}

export const getDepartments = async () => {
    return prisma.department.findMany()
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

export const getSupervisorTable = async (): Promise<SupervisorTableItem[] | undefined> => {
    try {
        const events = await prisma.event.findMany({
            select: {
                name: true,
                id: true,
                date: true
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

        if (user) {
            return user?.estimationsEvents
        }
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}