import { User, EstimationEvent } from "@root/prisma/generated/prisma/browser"

export type generalAttendanceTableItem = {
    User: Pick<User, 'sureName' | 'lastName' | 'id' | 'firstName'>,
    estimationsEvent: Pick<EstimationEvent, "EventId" | "estimation">[]
}
