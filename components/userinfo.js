
"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {

  return (
    <div className="grid place-items-center h-screen bg-purple-200">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div className="text-black">
          Name: <span className="font-bold text-black"></span>
        </div>
        <div className="text-black">
          Email: <span className="font-bold"></span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-purple-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
