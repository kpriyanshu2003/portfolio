"use client";

import { NavLinks } from "@/data/constant/Navbar";
import Link from "next/link";
import { v4 as uuid } from "uuid";

export default function Navbar() {
  return (
    <nav className="absolute w-full border flex items-center justify-between px-20 h-14">
      <div className="font-neuzeit-grotesk text-2xl">P</div>
      <div className="flex items-center justify-between gap-20">
        {NavLinks.map((i) => (
          <Link key={uuid()} href={i.url}>
            {i.name}
          </Link>
        ))}
      </div>

      <div>Kbar</div>
    </nav>
  );
}
