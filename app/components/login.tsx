"use client";

import React from "react";
import { useState } from "react";
import { signIn } from "../auth/auth";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="topbar-font">
        <div className="banner-font text-5xl flex flex-row gap-5 items-center justify-center my-5">
          <h1 className="  text-gray-400 ">Login to</h1>
          <h1 className="  text-gray-200 ">E.museum</h1>
        </div>

        <form className="bg-gray-200 flex w-[500px] shadow-lg shadow-gray-800 flex-col gap-2 p-5 rounded-xl">
          <h3 className="text-gray-700">Email:</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg bg-gray-300 text-lg p-[5px] mb-5"
            type="text"
          />
          <h3 className="text-gray-700">Password:</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg bg-gray-300 text-lg p-[5px]"
            type="password"
          />
          <button
            formAction={() => signIn(email, password)}
            className="text-gray-700 rounded-lg mt-5 bg-gray-300 shadow-md shadow-gray-400 text-xl p-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
