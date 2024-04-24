import LogoutButton from "@/components/auth/LogoutButton";
import { getRequireAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getRequireAuthSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <main>
      <LogoutButton />
      Main page <p>{JSON.stringify(session, null, 2)}</p>
    </main>
  );
}
