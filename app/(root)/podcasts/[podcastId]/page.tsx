"use client";

import PodcastDetailPlayer from "@/components/PodcastDetailPlayer";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import React from "react";

function PodcastDetails({
  params: { podcastId },
}: {
  params: { podcastId: Id<"podcasts"> };
}) {
  const podcast = useQuery(api.podcasts.getPodcastById, { podcastId });

  return (
    <section className=" flex flex-col w-full">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Currently playing</h1>

        <figure className="flex items-center gap-3">
          <Image
            src="/icons/headphone.svg"
            alt="headphone"
            width={24}
            height={24}
          />

          <h2 className="text-16 font-bold text-white-1">{podcast?.views}</h2>
        </figure>
      </header>

      <PodcastDetailPlayer />

      <p className="text-white-2 text-16 pb-8 pt[45px] font-medium max-md:text-center">
        {podcast?.podcastDescription}
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-18 font-bold text-white-1">Transcription</h1>
          <p className="text-16 font-medium text-white-2">
            {podcast?.voicePrompt}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PodcastDetails;
