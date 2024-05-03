import { redirect } from "next/navigation";
import { Cotainer, LoginCard } from "./css";

import { LoginButton } from "@/components/auth";
import { Img } from "@/components/dataUx";

import Logo from "@public/logoMycollection.webp";
import { GoogleIcon } from "@public/icon";
import { getSession } from "../actions";

export default async function Login() {
  const session = await getSession();

  if (session) {
    return redirect("/");
  }

  return (
    <Cotainer>
      <LoginCard>
        <Img src={Logo.src} alt={"Logo MyCollection"} width="250px" />
        <LoginButton name="google" icon={GoogleIcon} />
      </LoginCard>
    </Cotainer>
  );
}
