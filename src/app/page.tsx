import { redirect } from "next/navigation";
import { Suspense } from "react";

import { Img, Loading } from "@/components/dataUx";
import { ProfilComponent } from "@/components/auth";
import { CollectionContainer } from "@/components/collection";

import logoMycollection from "@public/logoMycollection.webp";

import { Header, Main, Wrapper } from "./css";
import { Background } from "@/components/popUp";

import { Providers } from "@/context/providers";

import { getSession } from "./actions";
import { ItemContainer } from "@/components/item";

export default async function Home() {
  const session = await getSession();

  if (!session) {
    return redirect("/login");
  }

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
    <Providers>
      <Suspense fallback={<Loading />}>
        <Background />
        <Wrapper>
          <Header>
            <Img
              src={logoMycollection.src}
              alt={`MyCollection-logo`}
              width="180"
            />
            <ProfilComponent session={session} />
          </Header>
          <Main>
            <CollectionContainer />
            <ItemContainer />
          </Main>
        </Wrapper>
      </Suspense>
    </Providers>
  );
}
