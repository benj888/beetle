

"use server"; 
import { signIn, signOut } from "@/auth.ts";

export async function handleSignIn() {
  await signIn("google");
}

export async function handleSignOut() {
  await signOut();
}
