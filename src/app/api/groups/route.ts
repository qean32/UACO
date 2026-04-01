import { prisma } from "@root/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const groups = await prisma.group.findMany({
        omit: { updateadAt: true, createdAt: true }
    })

    return NextResponse.json(groups)
}
