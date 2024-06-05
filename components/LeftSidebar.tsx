"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function LeftSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar flex">
      <nav className="flex flex-col gap-6 items-start">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1.5 pb-10 max-lg:justify-center max-lg:px-4"
        >
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcastr
          </h1>
        </Link>

        {sidebarLinks.map(({ imgURL, route, label }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);
          return (
            <Link
              key={route}
              href={route}
              className={cn(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
                isActive && "bg-nav-focus border-r-4 border-orange-1"
              )}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <h2>{label}</h2>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

export default LeftSidebar;
