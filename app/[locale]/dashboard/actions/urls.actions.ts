"use server";

import { urlSchema, UrlSchemaType } from "@/validation/url.validation";
import prisma from "@/lib/prisma";
import { requireAuth } from "@/lib/user.action";
import { revalidateTag } from "next/cache";

export const createNewUrlShort = async (urlsData: UrlSchemaType) => {
  const user = await requireAuth();
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
  revalidateTag("coins");
  return {
    message: "Short URL created successfully",
    success: true,
    data: null,
  };
};
