import React from "react";
import { SignUp } from "@clerk/nextjs";

function Page() {
  return (
    <div className="text-white-1 flex-center glassmorphism-auth h-screen w-full">
      <SignUp />
    </div>
  );
}

export default Page;
