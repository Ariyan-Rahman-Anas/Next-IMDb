"use client";

import Link from "next/link";
import { useRef } from "react";

export default function SignUp() {
  const handleSubmitForm =  (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const aNewUser={email, password}
      console.log(aNewUser)
      form.reset()
    };
    
    const formRef = useRef(null)

  return (
    <div className="flex flex-col items-center justify-center gap-3 min-h-[80vh] px-2 ">
      <div className="text-center w-full md:w-[80vw] mx-auto ">
        <h1 className="font-semibold text-3xl underline underline-offset-4 ">
          Sign up
        </h1>
        <form
          onSubmit={handleSubmitForm}
          ref={formRef}
          className="flex flex-col gap-1 mt-5 "
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="p-2 rounded-md text-black tracking-wide bg-gray-300 border-2 border-transparent focus:outline-none focus:bg-white focus:border-primary duration-500 "
          />
          <div className="email error"></div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="p-2 rounded-md text-black tracking-wide bg-gray-300 border-2 border-transparent focus:outline-none focus:bg-white focus:border-primary duration-500 "
          />
          <div className="password error"></div>
          <input
            type="submit"
            value="Sign up"
            className="p-2 font-semibold rounded-md text-black tracking-wide bg-primary border-2 border-transparent hover:bg-white hover:border-primary duration-500 "
          />
        </form>
      </div>

      <div className="flex items-center justify-center gap-1">
        <p>already have an account?</p>
        <Link href={"log-in"} className="underline font-semibold ">
          Log in
        </Link>
      </div>
    </div>
  );
}
