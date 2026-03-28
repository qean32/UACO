import { Sex } from "@root/prisma/generated/prisma/enums";
import z from "zod";

export const formCreateSupervisor = z.object({
    firstName: z.string(),
    lastName: z.string(),
    sureName: z.string(),
    dateOfBirth: z.string(),
    sex: Sex,
})

export type TformCreateSupervisor = z.infer<typeof formCreateSupervisor>
