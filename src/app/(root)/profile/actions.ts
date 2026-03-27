'use server'

import { studentTableItem, tableResponse, userInfo } from "@/@types";
import { DEFAULT_TAKE, Period } from "@/config";
import { convertDayToSecond } from "@/lib/helpers";
import { Role } from "@root/prisma/generated/prisma/enums";
import { prisma } from "@root/prisma/prisma";


export const getUserInfoAction = async (id: number): Promise<userInfo | null> => {
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
        console.log('[getUserInfoAction] Server error', error);
        throw (error)
    }
}

export const getRoleAction = async (id: number): Promise<{ role: Role } | null> => {
    try {
        return prisma.user.findFirst({ where: { id: Number(id) }, select: { role: true } })
    } catch (error) {
        console.log('[getRoleAction] Server error', error);
        throw (error)
    }
}


export const getStudentTableAction = async ({ page, userId, period }: { userId: number, page: number, period?: Period }): Promise<tableResponse<studentTableItem[]>> => {
    try {
        const skip = (page || 0) * DEFAULT_TAKE
        const filter = {
            AND: [
                { UserId: Number(userId) },
                { ...(period === Period.Week ? { Event: { date: { gte: new Date(Date.now() - convertDayToSecond(7)) } } } : null) },
                { ...(period === Period.Month ? { Event: { date: { gte: new Date(Date.now() - convertDayToSecond(30)) } } } : null) }
            ]
        }

        const estimations = await prisma.estimationEvent.findMany(
            {
                where: filter,
                select: {
                    Event: { select: { name: true, id: true, date: true } },
                    estimation: true,
                    id: true
                },
                take: DEFAULT_TAKE,
                skip,
                orderBy: { createdAt: "desc" }
            },
        )

        return { items: estimations, end: skip + DEFAULT_TAKE >= await prisma.estimationEvent.count({ where: filter }) }
    } catch (error) {
        console.log('[getStudentTableAction] Server error', error);
        throw (error)
    }
}
