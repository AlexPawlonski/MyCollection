import prisma from "@/lib/prisma";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession() {
  const session = await getServerSession(authConfig);
  return session;
}
export async function getAccount() {
  const session = await getSession();
  const account = await prisma.account.findFirstOrThrow({
    where: {
      userId: session?.user.id,
    },
  });
  return account;
}