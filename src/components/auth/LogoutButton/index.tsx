"use client";
import { signIn, signOut } from "next-auth/react";
import { Container, IconCss, Title } from "./css";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoutButton() {
  return (
    <Container
      onClick={async (e) => {
        e.preventDefault();
        await signOut();
      }}
    >
      <FontAwesomeIcon icon={faRightFromBracket} className={IconCss} />
      <Title>Déconnexion</Title>
    </Container>
  );
}
