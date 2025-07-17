"use client";

import { signIn } from "next-auth/react";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <h2>Login Page</h2>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </div>
  );
}
