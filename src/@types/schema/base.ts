import { z } from 'zod';

export const passwordSchema = z.string().min(3, { message: 'Введите корректный пароль' });