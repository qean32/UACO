import { NextResponse } from "next/server";
import { prisma } from "@root/prisma/prisma"

export async function GET() {
    const departament = await prisma.department.findMany()

    return NextResponse.json(departament)
}