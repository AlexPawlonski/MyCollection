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

  const items = await prisma.account.findFirstOrThrow({
    where: {
      userId: session?.user.id,
    },
    select: {
      items: true,
    },
  });

  //ADD
  // await prisma.item.create({
  //   data: {
  //     name: "test",
  //     accountId: account.id,
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
        {JSON.stringify(items, null, 2)}
      </main>
    </Suspense>
  );
}
