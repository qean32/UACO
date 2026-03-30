import z from "zod";

export const formUpdateDepartment = z.object({
    name: z.string(),
    code: z.string(),
    primaryCode: z.string()
})

export type TformUpdateDepartment = z.infer<typeof formUpdateDepartment>
