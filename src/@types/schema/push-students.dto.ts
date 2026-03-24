import z from "zod";

export const formPushStudents = z.object({
    file: z.any()
})

export type TformPushStudents = z.infer<typeof formPushStudents>
