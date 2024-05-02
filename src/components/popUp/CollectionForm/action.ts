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
    return { message: "Failed to create collection", isSuccess: false };
  }
}

export async function updateCollection(formData: IForm, id: string) {
  try {
    await prisma.collection.update({
      where: {
        id: id,
      },
      data: {
        name: formData.name,
      },
    });
    revalidateTag("prisma-user");
    return {
      message: `${formData.name} Update !`,
      isSuccess: true,
    };
  } catch (e) {
    return { message: "Failed to update collection", isSuccess: false };
  }
}

export async function deleteCollection(id: string) {
  try {
    await prisma.collection.delete({
      where: {
        id: id,
      },
    });
    revalidateTag("prisma-user");
    return {
      message: `${id} Deleted !`,
      isSuccess: true,
    };
  } catch (e) {
    return { message: "Failed to Deleted collection", isSuccess: false };
  }
}
