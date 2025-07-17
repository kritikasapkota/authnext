"use client";
import { useSession, signOut , signIn } from "next-auth/react";

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
  return (
    <div >
      <h2>Login Page</h2>
      <button onClick={() => signIn()}>Sign in with GitHub</button>
    </div>
  );
}
