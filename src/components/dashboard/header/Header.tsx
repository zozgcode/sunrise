"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-[#004042] p-[20px] py-[15px] pb-[18px]">
      <Image src="https://i.imgur.com/wI1o8qZ.png" width={230} height={28} className="w-[180px]" alt="logo" />
      <div className="relative">
        <RiLogoutCircleLine className="text-2xl text-white" onClick={toggleNav}/>

        {open && (
          <div className="absolute mt-1 z-50 shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-[#004042]">
              {user.holder.firstName}&nbsp;{user.holder.lastName}
            </p>
            <p
              className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#004042] border whitespace-nowrap text-white"
              onClick={handleLogout}
            >
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
