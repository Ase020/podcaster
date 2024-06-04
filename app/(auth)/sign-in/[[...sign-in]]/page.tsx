import React from "react";
import { SignIn } from "@clerk/nextjs";

function Page() {
  return (
    <div className="text-white-1 flex-center glassmorphism-auth h-screen w-full">
      <SignIn />
    </div>
  );
}

export default Page;
