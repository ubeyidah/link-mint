import z from "zod";

export const authSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(128, "Password must not exceed 128 characters"),
});

export type AuthSchema = z.infer<typeof authSchema>;
