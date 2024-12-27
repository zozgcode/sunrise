"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative border-b flex items-center justify-center">
      <Image src="https://i.imgur.com/wI1o8qZ.png" width={230} height={28} className="w-[200px]" alt="logo" />
    </div>
  );
}
