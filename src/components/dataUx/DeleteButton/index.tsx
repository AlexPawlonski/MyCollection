"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonTitle } from "./css";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PopUpContext } from "@/context/popUpContext";
import { deleteCollection } from "@/components/popUp/CollectionForm/action";

interface Props {
  type: "collection" | "item";
  ButtonWSizePx?: number;
  ButtonHSizePx?: number;
  iconSizePx?: number;
  id: string;
}

export default function DeleteButton({
  type,
  id,
  ButtonWSizePx = 170,
  ButtonHSizePx = 35,
  iconSizePx = 20,
}: Props) {
  let { setPopUpStatus } = useContext(PopUpContext);

  return (
    <Button
      onClick={async () => {
        console.log("delete", id, type);
        if (type === "collection") {
          const responce = await deleteCollection(id);
          if (responce.isSuccess) {
            setPopUpStatus(null);
          }
        }
      }}
      width={ButtonWSizePx}
      height={ButtonHSizePx}
    >
      <FontAwesomeIcon icon={faTrashAlt} style={{ height: iconSizePx }} />
      <ButtonTitle>Supprimer</ButtonTitle>
    </Button>
  );
}
