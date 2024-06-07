"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function MobileNav() {
  const pathname = usePathname();

  return (
    <section className="">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-black-1">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-3.5 pb-10 pl-4"
          >
            <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
            <h1 className="text-24 font-extrabold text-white-1">Podcastr</h1>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col  justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex flex-col w-full gap-6">
                {sidebarLinks.map(({ imgURL, route, label }) => {
                  const isActive =
                    pathname === route || pathname.startsWith(`${route}/`);
                  return (
                    <SheetClose key={route} asChild>
                      <Link
                        href={route}
                        className={cn(
                          "flex gap-3 items-center w-full py-4 max-lg:px-4 justify-start",
                          isActive && "bg-nav-focus border-r-4 border-orange-1"
                        )}
                      >
                        <Image
                          src={imgURL}
                          alt={label}
                          width={24}
                          height={24}
                        />
                        <h2 className="text-white-1">{label}</h2>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
