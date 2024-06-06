"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import PodcastCard from "@/components/PodcastCard";

function Home() {
  const allPodcasts = useQuery(api.podcasts.getAllPodcasts);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending podcasts</h1>

        <div className="podcast_grid">
          {allPodcasts?.map(
            ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                title={podcastTitle}
                description={podcastDescription}
                imgUrl={imageUrl as string}
                podcastId={_id}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
