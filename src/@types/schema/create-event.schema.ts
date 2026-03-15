import z from "zod";

export const formCreateEvent = z.object({
    name: z.string(),
    date: z.date(),
    SupervisorId: z.string()
})

export type TformCreateEvent = z.infer<typeof formCreateEvent>
