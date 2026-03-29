import z from "zod";

export const formCreateSupervisor = z.object({
    firstName: z.string(),
    lastName: z.string(),
    sureName: z.string(),
    dateOfBirth: z.string(),
    sex: z.string(),
})

export type TformCreateSupervisor = z.infer<typeof formCreateSupervisor>
