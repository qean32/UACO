import { NextResponse } from "next/server";
import { prisma } from "@root/prisma/prisma"

export async function GET() {
    const users = await prisma.user.findMany({
        where: {
            role: "STUDENT"
        },
        select: {
            GroupCode: true,
            _count: {
                select: { estimationsEvents: true }
            }
        }
    })

    const groupCounts = users.reduce((acc, user) => {
        if (user.GroupCode) {
            acc[user.GroupCode] = (acc[user.GroupCode] || 0) + user._count.estimationsEvents
        }
        return acc
    }, {} as Record<string, number>)

    const groups = Object.entries(groupCounts)
        .map(([GroupCode, estimationsEvents]) => ({ GroupCode, _count: { estimationsEvents } }))
        .sort((a, b) => b._count.estimationsEvents - a._count.estimationsEvents)
        .slice(0, 5)

    return NextResponse.json(groups)
}
