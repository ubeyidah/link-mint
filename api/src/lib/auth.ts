import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import env from "envgaurd";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),

  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: env("GOOGLE_CLIENT_ID") as string,
      clientSecret: env("GOOGLE_CLIENT_SECRET") as string,
    },
  },
});
