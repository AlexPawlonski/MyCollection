"use client";
import { AddButton } from "@/components/dataUx";
import { Container, Header, Main, Title } from "./css";
import { getUserCollections } from "./action";
import Collection from "../Collection";
import { useContext, useEffect, useState } from "react";
import { CollectionContext } from "@/context/collectionsContext";

export default function CollectionContainer() {
  const { setCollectionSelected } = useContext(CollectionContext);
  const [collections, setCollections] = useState<
    {
      id: string;
      name: string;
      createdAt: Date;
      updatedAt: Date;
      accountId: string | null;
    }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const collections = await getUserCollections();
      setCollections(collections);
      setCollectionSelected(collections[0]);
    }
    fetchData();
  }, [setCollectionSelected]);

  return (
    <Container>
      <Header>
        <Title>Vos collection</Title>
        <AddButton type="collection" />
      </Header>
      <Main>
        {collections.map((collection, key) => (
          <Collection key={key} collection={collection} />
        ))}
      </Main>
    </Container>
  );
}
