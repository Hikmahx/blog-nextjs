import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      <div className="w-full flex justify-between mb-4 mt-8">
        <Skeleton className="h-10 w-3/4 bg-slate-200" />
        <Skeleton className="h-10 w-1/4 bg-slate-200" />
      </div>
      <div className="flex flex-col mx-auto gap-x-6 gap-y-2 w-full">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-full !prose lg:!prose-xl prose-slate !max-w-none lg:!max-w-none relative rounded-none shadow-none flex items-center justify-between border-white border-b border-b-gray-300 first:border-t first:border-t-gray-300 gap-x-4"
          >
            <div className="">
              <div className="py-1 space-y-0 px-0">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-10 h-10 bg-slate-200 rounded-full !my-2 lg:!my-2" />
                  <div className="flex flex-col text-xs">
                    <Skeleton className="h-4 w-24 bg-slate-200" />
                    <Skeleton className="h-4 w-32 bg-slate-200" />
                  </div>
                </div>
                <Skeleton className="h-6 w-3/4 bg-slate-200 !my-2 lg:!my-2" />
              </div>
              <div className="pb-0 px-0">
                <Skeleton className="h-4 w-full bg-slate-200 !my-0 lg:!my-0" />
              </div>
              <div className="px-0 mt-4 flex gap-2 flex-wrap">
                {[...Array(3)].map((_, tagIndex) => (
                  <Skeleton
                    key={tagIndex}
                    className="h-6 w-16 bg-slate-200 rounded-full"
                  />
                ))}
              </div>
            </div>
            <Skeleton className="w-40 h-24 bg-slate-200 rounded-lg" />
          </div>
        ))}
      </div>
    </main>
  );
}
