import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import ConvexClientProvider from "../providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";
import "./globals.css";

const manRope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <html lang="en">
        <AudioProvider>
          <body className={manRope.className}>{children}</body>
        </AudioProvider>
      </html>
    </ConvexClientProvider>
  );
}
