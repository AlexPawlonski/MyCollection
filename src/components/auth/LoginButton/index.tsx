"use client";
import { Img } from "@/components/dataUx";
import { signIn } from "next-auth/react";
import { StaticImageData } from "next/image";
import { Button, IconMargin, Name } from "./css";

interface Props {
  name: string;
  icon: StaticImageData;
}

export default function LoginButton({ name, icon }: Props) {
  return (
    <Button
      className=""
      onClick={async (e) => {
        e.preventDefault();
        await signIn(name, { callbackUrl: "/" });
      }}
    >
      <IconMargin>
        <Img src={icon.src} alt={`${name}-icon`} width="25px" />
      </IconMargin>
      <Name>Connextion avec {name}</Name>
    </Button>
  );
}
