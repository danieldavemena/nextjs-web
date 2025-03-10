"use client";

import React, { useEffect, useState } from "react";
import { logout } from "../auth/auth";
import supabase from "@/lib/initSupabase";
import Topbar from "./topbar";
import Link from "next/link";

const account = () => {
  const [email, setEmail] = useState<String>();
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email?.toString());
      }
    };

    getUser();
  }, []);

  const openDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <div className="topbar-font sticky w-full p-5 text-lg items-end flex flex-col gap-5 top-0 right-5">
        <div className="flex text-white ml-0 mr-auto gap-8">
          <Link href="/" className="text-gray-300">
            Back to E.museum
          </Link>
        </div>
        <div
          onClick={openDropdown}
          className="absolute h-12 w-12  bg-gray-900 rounded-3xl"
        ></div>
        {dropdown && <DropdrownElement email={email} />}
      </div>
    </div>
  );
};

interface DropdrownElementProps {
  email: String | undefined;
}

const DropdrownElement: React.FC<DropdrownElementProps> = ({ email }) => {
  return (
    <div
      className={`absolute top-20 flex animate-fade-in shadow-md items-center w-max [&>*]:transition duration-300 ease-in-out flex-col p-2 shadow-gray-800 bg-gray-900 rounded-md`}
    >
      <h3 className="text-gray-500 flex-grow">{email}</h3>
      <h3 className="hover:bg-gray-800 cursor-pointer text-gray-500 w-full px-2  py-2">
        View profile
      </h3>
      <h3 className="hover:bg-gray-800 cursor-pointer text-gray-500 w-full px-2 py-2">
        Settings
      </h3>
      <button
        onClick={logout}
        className="mt-5 bg-red-400 w-full text-gray-200 rounded-md py-2 "
      >
        Log out
      </button>
    </div>
  );
};

export default account;
