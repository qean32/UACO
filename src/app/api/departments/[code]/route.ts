import { prisma } from "@root/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: any) {
    const _params = await params

    const department = await prisma.department.findFirst({
        where: { code: _params.code }
    })

    return NextResponse.json(department)
}
