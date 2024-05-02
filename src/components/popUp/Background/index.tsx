"use client";
import { useContext, useEffect, useState } from "react";
import { BackgroundCss } from "./css";
import { PopUpContext } from "@/context/popUpContext";
import CollectionForm from "../CollectionForm";
import { getCollection } from "./action";

export default function Background() {
  const { popUpStatus } = useContext(PopUpContext);

  const [collectionUpdate, setCollectionUpdate] = useState<{
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    accountId: string | null;
  }>();

  useEffect(() => {
    async function fetchData() {
      if (popUpStatus?.id && popUpStatus?.type === "collection") {
        const collection = await getCollection(popUpStatus?.id);
        if (collection !== null) {
          setCollectionUpdate(collection);
        }
      }
    }
    fetchData();
  }, [popUpStatus]);

  return (
    <BackgroundCss isActive={Boolean(popUpStatus)} type={popUpStatus?.type}>
      {popUpStatus?.type === "collection" && (
        <CollectionForm collection={collectionUpdate} />
      )}
      {popUpStatus?.type === "item" && <div>item</div>}
    </BackgroundCss>
  );
}
