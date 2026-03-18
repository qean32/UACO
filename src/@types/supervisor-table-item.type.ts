import { Event } from "@root/prisma/generated/prisma/browser"

export type supervisorTableItem = Pick<Event, "date" | "id" | "name" | "SupervisorId"> & {
}
