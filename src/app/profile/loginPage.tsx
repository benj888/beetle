"use client";
// import { useEffect, useState } from "react";


import { useRouter } from "next/navigation";
import { useSession,signOut,signIn } from "next-auth/react";
export function SignIn() {
  const router = useRouter();

  const { data: session } = useSession();
  const user = session?.user;

  return user ? (
    <>
      <div className="p-4 h-full justify-center items-center  flex">
        <div className="border w-80 h-72">
          <div className="justify-center items-center flex mt-20">
            歡迎 {user.name}
          </div>
          
            <button className="p-2 border-2 mt-6" onClick={()=>{
                signOut()
            }}>
              登出
            {/* { redirectTo: "/main" } */}
            </button>
          
          {/* <div className="flex justify-center mt-6">
            {" "}
            <button
              className="p-2 border-2"
              onClick={() => {
                router.push("/main");
              }}
            >
              返回
            </button>
          </div> */}
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
          
            <button className="p-2 border-2 mt-6" onClick={()=>{
                signIn("google", { redirectTo: "/main" })
            }}>
              登入
              
            </button>
          
        </div>
      </div>
    </>
  );
}
