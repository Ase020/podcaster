import { EmptyStateProps } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function EmptyState({
  title,
  buttonLink,
  buttonText,
  search,
}: EmptyStateProps) {
  return (
    <section className="flex-center size-full flex-col gap-3">
      <Image alt={title} src="/icons/emptyState.svg" width={250} height={250} />

      <div className="flex-center w-full max-w-[254px] flex-col gap-3">
        <h1 className="text-white-1 text-16 text-center font-medium">
          {title}
        </h1>

        {search && (
          <p className="text-16 text-white-2 text-center font-medium">
            Try adjusting your search to find what {"you're"} looking for.
          </p>
        )}

        {buttonLink && (
          <Button className="bg-orange-1">
            <Link href={buttonLink} className="flex items-center gap-1.5">
              <Image
                src="/icons/discover.svg"
                alt="discover"
                width={20}
                height={20}
              />
              <h1 className="text-white-1 text-16 font-extrabold">
                {buttonText}
              </h1>
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
}

export default EmptyState;
