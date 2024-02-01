import React from "react";

import { Link } from "react-router-dom";
import ActionButton from "../Utils/Buttons/ActionButton";

function SigninForm() {
  return (
    <form className=" ml-auto mr-auto w-[90vw] sm:w-[422px] p-5 bg-white flex flex-col items-center">
      <label htmlFor="email" className=" self-baseline">
        Email address
      </label>
      <input
        type="email"
        id="email"
        className=" w-full font-normal bg-gray-100 focus:bg-gray-300 focus:outline-none p-2  rounded-[10px] mb-4"
        placeholder="Enter your email"
      />

      <label htmlFor="password" className="self-baseline">
        Password
      </label>
      <input
        type="password"
        id="password"
        className=" w-full font-normal bg-gray-100 focus:bg-gray-300 focus:outline-none p-2  rounded-[10px] mb-4 placeholder-font"
        placeholder="........."
      />
      <Link
        className=" text-blue-600 self-baseline hover:underline"
        to="/forgot-password"
      >
        Forgot password?
      </Link>

      <ActionButton actionName='Sign In'/>
    </form>
  );
}

export default SigninForm;
