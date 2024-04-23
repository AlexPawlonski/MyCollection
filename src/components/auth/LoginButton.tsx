"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      className=""
      onClick={async (e) => {
        e.preventDefault();
        await signIn("google", { callbackUrl: "/" });
      }}
    >
      Conection with google
    </button>
  );
}
