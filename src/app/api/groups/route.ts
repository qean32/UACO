import { prisma } from "@root/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const groups = await prisma.group.findMany()

    return NextResponse.json(groups)
}