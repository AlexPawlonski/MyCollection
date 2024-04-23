import LoginButton from "@/components/auth/LoginButton";
import LogoutButton from "@/components/auth/LogoutButton";
import { getRequireAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getRequireAuthSession();

  if (session) {
    return (
      <>
        <p>{JSON.stringify(session, null, 2)}</p>
        <LogoutButton />
      </>
    );
  }
  return (
    <main>
      <LoginButton />
    </main>
  );
}
