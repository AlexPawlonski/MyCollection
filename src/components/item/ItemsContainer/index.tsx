"use client";
import { AddButton } from "@/components/dataUx";
import { Container, Header, Title } from "./css";
import { useContext } from "react";
import { CollectionContext } from "@/context/collectionsContext";

export default function ItemContainer() {
  const { collectionSelected } = useContext(CollectionContext);

  return (
    <Container>
      <Header>
        <Title>{collectionSelected?.name}</Title>
        <AddButton type="item" />
      </Header>
    </Container>
  );
}
