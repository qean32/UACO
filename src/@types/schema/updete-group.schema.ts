import z from "zod";

export const formUpdateGroup = z.object({
    code: z.string(),
    DepartmentCode: z.string(),
    semester: z.number(),
})

export type TformUpdateGroup = z.infer<typeof formUpdateGroup>
