import z from "zod";

export const formUpdateGroup = z.object({
    code: z.string(),
    DepartmentCode: z.string(),
    semester: z.string(),
})

export type TformUpdateGroup = z.infer<typeof formUpdateGroup>
