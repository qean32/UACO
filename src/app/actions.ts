'use server'

import { generalAttendanceTableItem } from "@/@types"
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

export const getGeneralData = async ({ course, date, department, group }: {
    date?: string,
    group?: number
    department?: number
    course?: number
}): Promise<{ items: generalAttendanceTableItem[], column: Pick<Event, "name" | "id">[] }> => {
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
        let items: generalAttendanceTableItem[] = students.map(student_item => {
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

export const GET_myEstimation = async (userId: number) => {
    const myEstimation = await prisma.estimationEvent.findMany({ where: {} })
    const events = await prisma.event.findMany()
}