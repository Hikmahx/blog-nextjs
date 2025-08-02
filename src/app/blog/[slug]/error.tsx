"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 py-6 md:px-6">
        <Link href="/blog" className="flex items-center my-2 prose">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            ></path>
          </svg>
          BACK
        </Link>
        <div className="flex flex-col items-center mt-12">
          <h2 className="mx-auto mb-10 text-xl prose capitalize">
            {"Error: " + error.message || "Something went wrong!"}
          </h2>
          <Button className="w-fit mx-auto" onClick={reset}>
            Try again
          </Button>
        </div>
      </div>
    </main>
  );
}
