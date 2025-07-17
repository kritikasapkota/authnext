"use client";
import { useSession, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>You Are signned in as {session.user.name}</p>
        <button onClick={() => signOut()}>Signout</button>
      </>
    );
  }
}
