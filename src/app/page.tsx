"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    redirect("/blog");
  }, []);

  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      <h1 className="mb-4 font-bold ">Home</h1>
      <div className="flex items-center justify-center min-h-screen text-xl">
        Redirecting to Blog...
      </div>
    </main>
  );
}

export default Home;
