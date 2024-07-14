import BackButton from "@/components/BackButton";
import React from "react";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      <BackButton />
      <div className="flex items-center justify-center text-xl">
        Page Not Found
      </div>
    </main>
  );
}

export default NotFound;
