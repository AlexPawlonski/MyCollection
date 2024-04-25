"use client";
import { signIn, signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className=""
      onClick={async (e) => {
        e.preventDefault()
        await signOut();
      }}
    >
     LogOut
    </button>
  );
}
