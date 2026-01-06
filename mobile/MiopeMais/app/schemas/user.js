import { z } from "zod";

export const userFormSchema = z.object({
    email: z
        .string()
        .email("Email inválido"),
    password: z
        .string()
        .min(8)
        .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "A senha precisa conter letras e números.")
})