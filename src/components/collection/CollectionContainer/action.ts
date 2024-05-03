"use server";
import { getAccount } from "@/app/actions";
import prisma from "@/lib/prisma";

export async function getUserCollections() {
  const account = await getAccount();
  const collections = await prisma.collection.findMany({
    where: {
      accountId: account.id,
    },
  });

  return collections;
}
