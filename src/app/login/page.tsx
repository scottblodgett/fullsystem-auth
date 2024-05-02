"use client";

import SignupForm from "@/components/SignupForm";
import FacebookIcon from "@/components/ui/FacebookIcon";
import GoogleIcon from "@/components/ui/GoogleIcon";
import SocialIcon from "@/components/ui/SocialIcon";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="flex flex-col gap-3 justify-center items-center p-4">
      <h2 className=" font-bold text-4xl p-8">Log in</h2>
      <SignupForm buttonName="Log in with email" />
      <div className=" div-line w-full md:max-w-96 flex gap-4 justify-center items-center">
        <div className=" w-full border-b border-slate-300"></div>
        <div className=" text-center text-slate-400 font-semibold ">
          {" "}
          or
        </div>
        <div className=" w-full border-b border-slate-300"></div>
      </div>
      <div className=" w-full md:max-w-96 flex flex-col gap-3 justify-center font-medium items-center">
        <SocialIcon
          className=" bg-[#3b5998] text-white w-full p-1 hover:bg-blue-900"
          type="button"
          name="Login with Facebook"
          onClick={() => signIn("facebook")}
        >
          {" "}
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon
          className=" bg-[#4285F4] text-white w-full p-1 hover:bg-blue-400"
          type="button"
          name="Login with Google"
          onClick={() => signIn("google")}
        >
          {" "}
          <GoogleIcon />
        </SocialIcon>
        <Link
          className=" pt-6 hover:text-blue-500"
          href={"/signup"}
        >
          You don&apos;t have an account?
        </Link>
        <Link
          className=" hover:text-blue-500"
          href={"/forgot"}
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
