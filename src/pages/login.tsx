import LoginButton from "@/components/auth/LoginButton";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default function Login() {
  return (
    <div>
      <LoginButton />
    </div>
  );
}
