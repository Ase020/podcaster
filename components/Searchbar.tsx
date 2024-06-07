"use client";

import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "@/lib/useDebounce";

function Searchbar() {
  const [search, setSearch] = React.useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  const debouncedValue = useDebounce(search, 500);

  React.useEffect(() => {
    if (debouncedValue) {
      router.push(`/discover?search=${debouncedValue}`);
    } else if (!debouncedValue && pathname === "/discover") {
      router.push("/discover");
    }
  }, [debouncedValue, pathname, router]);

  return (
    <div className="text-white-1 relative mt-8 block">
      <Input
        placeholder="Search for podcasts"
        className="input-class py-6 pl-12 focus-visible:ring-offset-orange-1"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        onLoad={() => setSearch("")}
      />

      <Image
        src="/icons/search.svg"
        alt="search"
        height={20}
        width={20}
        className="absolute left-4 top-3.5"
      />
    </div>
  );
}

export default Searchbar;
