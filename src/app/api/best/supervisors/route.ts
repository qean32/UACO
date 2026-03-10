import { NextResponse } from "next/server";
import { prisma } from "@root/prisma/prisma"

export async function GET() {
    const supervisors = await prisma.user.findMany({
        orderBy: { organizedEvents: { _count: "asc" } },
        where: { role: "SUPERVISOR" },
        take: 5,
        select: { organizedEvents: { select: { _count: true } }, firstName: true, lastName: true, sureName: true }
    })

    return NextResponse.json(supervisors)
}
