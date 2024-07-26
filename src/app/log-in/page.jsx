"use client";

import apiUtils from "@/utils/apiUtils";
import Link from "next/link";
import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function LogIn() {
  const [emailErr, setEmailErr] = useState("")
  const [passErr, setPassErr] = useState("")
   const router = useRouter();

const handleSubmitForm = async (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  try{
    const anUser = { email, password };
    const logInUser = await apiUtils.post("login", anUser )
    console.log("logInUser", logInUser)
    if(logInUser?.user){
      localStorage.setItem("userData", JSON.stringify({email, token: logInUser.token}))
      setEmailErr("")
      setPassErr("")
      form.reset();
      router.push("/");
      }
  }catch(err){
    console.log("logInErr", err)
    console.log("error is :", err.response.data?.errors);
      const errors = err.response.data.errors
      setEmailErr(errors?.email)
      setPassErr(errors?.password)
  }
};

const formRef = useRef(null);

    return (
      <div className="flex flex-col items-center justify-center gap-3 min-h-[80vh] px-2 ">
        <div className="text-center w-full md:w-[80vw] mx-auto ">
          <h1 className="font-semibold text-3xl underline underline-offset-4 ">
            Log in
          </h1>
          <form
            onSubmit={handleSubmitForm}
            ref={formRef}
            className="flex flex-col gap-2 mt-5 "
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="p-2 rounded-md text-black tracking-wide bg-gray-300 border-2 border-transparent focus:outline-none focus:bg-white focus:border-primary duration-500 "
            />
                       {emailErr && <p className="err-msg">{emailErr}</p>  } 
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className="p-2 rounded-md text-black tracking-wide bg-gray-300 border-2 border-transparent focus:outline-none focus:bg-white focus:border-primary duration-500 "
            />
            {passErr && <p className="err-msg">{passErr}</p>  } 
            <input
              type="submit"
              value="Log in"
              className="p-2 cursor-pointer font-semibold rounded-md text-black tracking-wide bg-primary border-2 border-transparent hover:bg-white hover:border-primary duration-500 "
            />
          </form>
        </div>

        <div className="flex items-center justify-center gap-1">
          <p>new in Next-IMDb?</p>
          <Link href={"sign-up"} className="underline font-semibold ">
            Sign up
          </Link>
        </div>
      </div>
    );
}