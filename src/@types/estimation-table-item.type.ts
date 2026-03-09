import { Event } from "@root/prisma/generated/prisma/browser"

export type estimationTableItem = {
    estimation: number;
    Event: Pick<Event, "id" | "date" | "name">;
}
