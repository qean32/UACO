import { Event } from "@root/prisma/generated/prisma/browser"

export type SupervisorTableItem = Pick<Event, "date" | "id" | "name" | "SupervisorId"> & {
}
