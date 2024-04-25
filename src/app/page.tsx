import { getRequireAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";

import LogoutButton from "@/components/auth/LogoutButton";
import Loading from "@/components/dataUx/Loading";

export default async function Home() {
  const session = await getRequireAuthSession();

  if (!session) {
    return redirect("/login");
  }

  const prisma = new PrismaClient();

  const collections = await prisma.collection.findFirst({
    select: {
      items: true,
    },
  });

  // const account = await prisma.account.findFirstOrThrow({
  //   where: {
  //     userId: session?.user.id,
  //   },
  //   select: {
  //     id: true,
  //   },
  // });

  // const collection = await prisma.collection.findFirstOrThrow({
  //   where: {
  //     accountId: account.id,
  //   },
  //   select: {
  //     id: true,
  //   },
  // });

  // await prisma.collection.create({
  //   data: {
  //     name: "Categorie 1",
  //     accountId: account.id,
  //   },
  // });

  // await prisma.item.create({
  //   data: {
  //     name: "Dark soul 3",
  //     collectionId: collection.id,
  //   },
  // });

  //UPDATE
  // await prisma.item.update({
  //   select: {}
  //   data: {
  //     name: "test",
  //     accountId: account.id,
  //   },
  // });

  //DELETE
  // await prisma.item.create({
  //  select: { id: }
  // });

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <LogoutButton />
        Main page <p>{JSON.stringify(session, null, 2)}</p>
        {JSON.stringify(collections, null, 2)}
      </main>
    </Suspense>
  );
}
