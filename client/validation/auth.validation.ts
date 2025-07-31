import z from "zod";

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(128, "Password must not exceed 128 characters"),
});

export type SignInType = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        "Name can only contain letters, spaces, apostrophes, and hyphens",
    }),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(128, "Password must not exceed 128 characters"),
});

export type SignUpType = z.infer<typeof signUpSchema>;
