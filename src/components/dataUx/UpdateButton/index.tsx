"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./css";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PopUpContext } from "@/context/popUpContext";

interface Props {
  type: "collection" | "item";
  ButtonSizePx?: number;
  iconSizePx?: number;
  id: string;
}

export default function UpdateButton({
  type,
  ButtonSizePx = 30,
  iconSizePx = 15,
  id,
}: Props) {
  let { setPopUpStatus } = useContext(PopUpContext);
  return (
    <Button
      onClick={() =>
        setPopUpStatus({
          type: type,
          id: id,
        })
      }
      width={ButtonSizePx}
    >
      <FontAwesomeIcon icon={faPencil} style={{ height: iconSizePx }} />
    </Button>
  );
}
