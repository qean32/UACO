import { prisma } from "@root/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: any) {
    const _params = await params
    const code = _params.code;

    const group = await prisma.group.findFirst({
        omit: { updateadAt: true, createdAt: true },
        where: { code }
    })

    return NextResponse.json(group)
}
