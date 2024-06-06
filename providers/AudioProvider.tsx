"use client";

import { AudioContextType, AudioProps } from "@/types";
import { usePathname } from "next/navigation";
import React from "react";

const AudioContext = React.createContext<AudioContextType | undefined>(
  undefined
);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [audio, setAudio] = React.useState<AudioProps | undefined>();
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/create-podcast") setAudio(undefined);
  }, [pathname]);

  return (
    <AudioContext.Provider value={{ audio, setAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = React.useContext(AudioContext);

  if (!context)
    throw new Error("useAudio must be used within an AudioProvider");

  return context;
};

export default AudioProvider;
