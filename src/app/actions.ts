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

export const GET_FEventStudent = async ({ course, date, department, group }: {
    date?: string,
    group?: number
    department?: number
    course?: number
}): Promise<generalAttendanceTableItem[]> => {
    try {
        const events = await prisma.event.findMany()
        const students = await prisma.user.findMany({
            select: {
                estimationsEvents: { select: { EventId: true } },
                firstName: true, lastName: true, sureName: true,
                id: true
            },
            take: 20,
        })
        let data: any[] = [...students]

        return data
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const GET_myEstimation = async (userId: number) => {
    const myEstimation = await prisma.estimationEvent.findMany({ where: {} })
    const events = await prisma.event.findMany()
}