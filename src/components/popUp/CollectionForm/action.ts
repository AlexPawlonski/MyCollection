"use server";

import { getAccount } from "@/app/actions";
import { IForm } from "@/interface/Iform";

import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function createCollection(formData: IForm) {
  const account = await getAccount();
  try {
    await prisma.collection.create({
      data: {
        accountId: account.id,
        name: formData.name,
      },
    });
    revalidateTag("prisma-user");
    return {
      message: `Added todo ${formData.name} Collection`,
      isSuccess: true,
    };
  } catch (e) {
    return { message: "Failed to create todo", isSuccess: false };
  }
}
