'use server'

import { studentTableItem, tableResponse, userInfo } from "@/@types";
import { DEFAULT_TAKE } from "@/config";
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


export const getStudentTableAction = async ({ page, userId }: { userId: number, page: number }): Promise<tableResponse<studentTableItem[]>> => {
    try {
        const skip = (page || 0) * DEFAULT_TAKE
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
        console.log('[getStudentTableAction] Server error', error);
        throw (error)
    }
}
