import { z } from 'zod';

export const formFilterSchema = z.object({
    date: z.string().optional(),
    group: z.string().optional(),
    department: z.string().optional(),
    course: z.string().optional(),
});

export type TformFilterSchema = z.infer<typeof formFilterSchema>
