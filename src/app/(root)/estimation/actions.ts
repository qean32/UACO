'use server'

import { estimationEventActionType, tableResponse, estimationTableItem } from "@/@types";
import { DEFAULT_TAKE } from "@/config";
import { prisma } from "@root/prisma/prisma";


export const estimationEventAction = async ({ estimation, EventId, UserId }: estimationEventActionType) => {
    try {
        await prisma.estimationEvent.create({
            data: {
                estimation: estimation,
                EventId: EventId,
                UserId: UserId
            }
        })
    } catch (error) {
        console.log('[estimationEventAction] Server error', error);
        throw (error);
    }
}

export const getEstimationTableAction = async ({ page, userId }: { userId: number, page: number }): Promise<tableResponse<estimationTableItem[]>> => {
    try {
        const skip = (page || 0) * DEFAULT_TAKE

        const events = await prisma.event.findMany({
            select: {
                id: true,
                name: true,
                date: true
            },
            take: DEFAULT_TAKE,
            skip,
            orderBy: { date: "desc" }
        })

        const estimations = await prisma.estimationEvent.findMany(
            {
                where: { UserId: Number(userId) },
                select: {
                    Event: { select: { name: true, id: true, date: true } },
                    estimation: true,
                },
                take: DEFAULT_TAKE,
                skip,
                orderBy: { createdAt: "desc" }
            }
        )

        const avgAndCount = await prisma.estimationEvent.groupBy({
            by: "EventId",
            _avg: { estimation: true },
            _count: true,
        })

        const _map = new Map(avgAndCount.map(item => [item.EventId, item]))
        const map = new Map(estimations.map(item => [item.Event.id, item]))

        // @ts-ignore
        let items: estimationTableItem[] = events.map(event_item => {
            const search = map.get(event_item.id)
            const _search = _map.get(event_item.id)

            if (!search) {
                return {
                    estimation: 0,
                    Event: event_item,
                    id: event_item.id,
                    avg: _search?._avg.estimation ?? 0,
                    count: _search?._count ?? 0
                }
            }
            return {
                ...search,
                id: search?.Event.id,
                avg: _search?._avg.estimation ?? 0,
                count: _search?._count ?? 0
            }
        })

        return { items, end: skip + DEFAULT_TAKE >= await prisma.event.count() }
    } catch (error) {
        console.log('[getEstimationTableAction] Server error', error);
        throw (error)
    }
}
