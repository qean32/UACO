import z from "zod";

export const formUpdateGroup = z.object({
    code: z.string(),
    DepartmentCode: z.string(),
    semester: z.union([z.string(), z.number()]),
    primaryCode: z.string()
})

export type TformUpdateGroup = z.infer<typeof formUpdateGroup>
