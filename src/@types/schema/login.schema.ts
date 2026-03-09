import { z } from 'zod';
import { passwordSchema } from './base';

export const formLoginSchema = z.object({
    email: z.string().email({ message: 'Введите корректную почту' }),
    password: passwordSchema,
});

export type TformLoginSchema = z.infer<typeof formLoginSchema>