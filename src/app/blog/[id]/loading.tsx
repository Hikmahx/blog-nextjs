import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Loading() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 py-6 md:px-6 ">
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
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            ></path>
          </svg>
          BACK
        </Link>
        <article className="">
          <section className="">
            <Skeleton className="h-10 w-3/4 mb-4 bg-slate-200" />
            <div className="flex items-center gap-2">
              <Skeleton className="w-10 h-10 rounded-full bg-slate-200" />
              <Skeleton className="h-6 w-24 bg-slate-200" />
              <Skeleton className="h-6 w-32 bg-slate-200" />
            </div>
          </section>
          <section className="">
            <Skeleton className="h-40 w-full mt-4 bg-slate-200" />
            <Skeleton className="h-40 w-full mt-4 bg-slate-200" />
            <Skeleton className="h-40 w-full mt-4 bg-slate-200" />
            <Skeleton className="h-20 w-1/2 mt-4 bg-slate-200" />
            <Skeleton className="h-10 w-full mt-4 bg-slate-200" />
          </section>
        </article>
      </div>
    </main>
  );
}
