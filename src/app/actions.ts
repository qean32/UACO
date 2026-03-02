'use server'

import { FEventStudentTableItemDto } from "@/src/@types"
import { Event } from "@/src/lib/generated/prisma/browser"
import { prisma } from "@/prisma/prisma"


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
}): Promise<FEventStudentTableItemDto[]> => {
    try {
        const events = await prisma.event.findMany()
        const students = await prisma.student.findMany({
            select: {
                gradeEvents: { select: { presence: true, EventId: true } },
                User: { select: { first_name: true, last_name: true, sure_name: true } },
                UserId: true
            },
            take: 20,
        })
        let data: any[] = [...students]


        events.forEach(item_event => {
            students.forEach(item_student => {
                if (!item_student.gradeEvents.find((item_grade: any) => item_event.id == item_grade.EventId)) {
                    data = [
                        ...data.filter(item => item.UserId != item_student.UserId),
                        {
                            ...item_student,
                            gradeEvents: [
                                ...data.find(item => item.UserId == item_student.UserId).gradeEvents,
                                {
                                    EventId: item_event.id,
                                    presence: false,
                                }
                            ]
                        }
                    ]
                }
                else {
                    data = [
                        ...data.filter(item => item.UserId != item_student.UserId),
                        {
                            ...data.find(item => item.UserId == item_student.UserId)
                        }
                    ]
                }
            }
            )
        })

        return data
    } catch (error) {
        console.log('[GetEvent] Server error', error);
        throw (error)
    }
}

export const GET_myGrade = async (userId: number) => {
    const myGrade = await prisma.gradeEvent.findMany({ where: {} })
    const events = await prisma.event.findMany()
}