import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@root/prisma/prisma"
import { estimationEventAction } from "@/@types";

export async function POST(req: NextRequest) {
    const { EventId, UserId, estimation } = (await req.json()) as estimationEventAction

    await prisma.estimationEvent.create({
        data: {
            estimation: Number(estimation),
            EventId: Number(EventId),
            UserId: Number(UserId)
        }
    })

    return NextResponse.json(null)
}