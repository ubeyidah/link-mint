import z from "zod";

export const urlSchema = z.object({
  orginalUrl: z.string().url("Invalid URL format"),
  shortCode: z
    .string()
    .min(6, "Short code must be at least 6 characters")
    .max(30, "Short code must not exceed 30 characters"),
  expiresAt: z.date().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type UrlSchemaType = z.infer<typeof urlSchema>;
