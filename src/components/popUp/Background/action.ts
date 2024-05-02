"use server";
import { getAccount } from "@/app/actions";
import prisma from "@/lib/prisma";

export async function getCollection(id: string) {
  const collections = await prisma.collection.findUnique({
    where: {
      id: id,
    },
  });

  return collections;
}
