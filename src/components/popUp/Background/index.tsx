"use client";
import { useContext } from "react";
import { BackgroundCss } from "./css";
import { PopUpContext } from "@/context/popUpContext";
import CollectionForm from "../CollectionForm";

export default function Background() {
  const { isActive, popUpType } = useContext(PopUpContext);

  return (
    <BackgroundCss isActive={isActive} type={popUpType}>
      {popUpType === "collection" && <CollectionForm />}
      {popUpType === "item" && <div>item</div>}
    </BackgroundCss>
  );
}
