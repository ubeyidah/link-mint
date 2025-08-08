"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { urlSchema, UrlSchemaType } from "@/validation/url.validation";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export const createNewUrlShort = async (urlsData: UrlSchemaType) => {
  const user = await auth.api.getSession({
    headers: await headers(),
  });
  if (!user?.session) {
    return redirect("/sign-in");
  }
  const { success, data, error } = urlSchema.safeParse(urlsData);
  if (!success) {
    return { message: error.issues[0].message, success: false, data: null };
  }
  const userRecord = await prisma.user.findUnique({
    where: {
      id: user.session.userId,
    },
    select: {
      coins: true,
    },
  });

  if (!userRecord || userRecord.coins <= 0) {
    return {
      message: "You don't have enough coins to create a short URL",
      success: false,
      data: null,
    };
  }
  await prisma.urls.create({
    data: {
      ...data,
      userId: user.session.userId,
    },
  });
  await prisma.user.update({
    where: { id: user.session.userId },
    data: { coins: userRecord.coins - 1 },
  });
  return {
    message: "Short URL created successfully",
    success: true,
    data: null,
  };
};
