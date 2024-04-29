"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PopUpContext } from "@/context/popUpContext";

interface Props {
  type: "collection" | "item";
  ButtonSizePx?: number;
  iconSizePx?: number;
}

export default function AddButton({
  type,
  ButtonSizePx = 40,
  iconSizePx = 25,
}: Props) {
  let { setIsActive, setPopUpType } = useContext(PopUpContext);
  return (
    <Button
      onClick={() => {
        setIsActive(true);
        setPopUpType(type);
      }}
      width={ButtonSizePx}
    >
      <FontAwesomeIcon icon={faPlus} style={{ height: iconSizePx }} />
    </Button>
  );
}
