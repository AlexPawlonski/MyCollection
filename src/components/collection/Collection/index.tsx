"use client";

import { Img, UpdateButton } from "@/components/dataUx";
import {
  ButtonWrapper,
  CollectionPictureWrapper,
  Container,
  IsSelected,
} from "./css";
import DefaultCollectionImg from "@public/defaultCollectionPictur.webp";
import { useContext, useMemo } from "react";
import { CollectionContext } from "@/context/collectionsContext";

interface Props {
  collection: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    accountId: string | null;
  };
}

export default function Collection({ collection }: Props) {
  const { collectionSelected, setCollectionSelected } =
    useContext(CollectionContext);

  const isSelected = useMemo(() => {
    if (collectionSelected === null) {
      return false;
    } else {
      return Boolean(collectionSelected.id === collection.id);
    }
  }, [collection.id, collectionSelected]);

  return (
    <Container onClick={() => setCollectionSelected(collection)}>
      <ButtonWrapper isActive={isSelected}>
        <UpdateButton type="collection" id={collection.id} />
      </ButtonWrapper>
      <CollectionPictureWrapper isActive={isSelected}>
        <Img
          src={DefaultCollectionImg.src}
          alt={"collection-default-img"}
          width="100%"
        />
      </CollectionPictureWrapper>
      <IsSelected isActive={isSelected} />
    </Container>
  );
}
