import z from "zod";

export const urlSchema = z.object({
  orginalUrl: z.string().url("Invalid URL format"),
  customSlug: z.string().optional(),
  shortCode: z
    .string()
    .min(6, "Short code must be at least 6 characters")
    .max(30, "Short code must not exceed 30 characters"),
  expiresAt: z.date().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});
