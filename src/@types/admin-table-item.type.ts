import { Event } from "@root/prisma/generated/prisma/browser"

export type adminTableItem = Pick<Event, "date" | "id" | "name"> & {
}
