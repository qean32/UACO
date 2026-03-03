import { User, EstimationEvent } from "@root/prisma/generated/prisma/browser"

export type generalAttendanceTableItem = {
    User: User,
    estimationsEvent: EstimationEvent[]
}
