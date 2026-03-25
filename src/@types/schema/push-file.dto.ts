import z from "zod";

export const formPushFile = z.object({
    file: z.any()
})

export type TformPushFile = z.infer<typeof formPushFile>
