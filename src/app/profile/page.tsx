"use client";
import { useEffect, useState } from "react";
import { auth } from "@/auth.ts";
import { handleSignIn, handleSignOut } from "./actions";
import { useRouter } from "next/navigation";

export default async function SignIn() {

  const router = useRouter();
  const session = await auth();
  // console.log(session)
  const user = session?.user;


  return user ? (
    <>
      <div className="p-4 h-full justify-center items-center  flex  ">
        <div className="border w-80 h-72">
          <div className="justify-center items-center flex mt-20">
            歡迎 {user.name}
          </div>
          <form className="flex justify-center " action={handleSignOut}>
            <button className="p-2 border-2 mt-6" type="submit">
              登出
            </button>
          </form>
          <div className="flex justify-center mt-6">
            {" "}
            <button
              className="p-2 border-2"
              onClick={() => {
                router.push("/main");
              }}
            >
              返回
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="p-4 h-full justify-center items-center flex ">
        <div className="border w-80 h-72">
          <div className="justify-center items-center flex mt-20">
            請使用google帳號登入
          </div>
          <form className="flex justify-center " action={handleSignIn}>
            <button className="p-2 border-2 mt-6" type="submit">
              登入
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
