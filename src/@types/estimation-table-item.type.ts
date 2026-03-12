import { Event } from "@root/prisma/generated/prisma/browser"

export type estimationTableItem = {
    estimation: number;
    id: number
    Event: Pick<Event, "id" | "date" | "name">;
}
