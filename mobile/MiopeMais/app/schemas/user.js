import { z } from "zod";

const userFormSchema = z.object({
    email: z
        .string()
        .email()
        .refine(val => true, {
            message: "Email inválido"
        }),
    password: z
        .string()
        .min(8)
        .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "A senha precisa conter letras e números")
})