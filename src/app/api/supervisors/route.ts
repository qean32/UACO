import { NextResponse } from "next/server";
import { prisma } from "@root/prisma/prisma"

export async function GET() {
    const supervisors = await prisma.user.findMany({
        where: { role: 'SUPERVISOR' },
        omit: {
            password: true
        }
    })

    return NextResponse.json(supervisors)
}