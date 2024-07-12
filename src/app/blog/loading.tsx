import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="flex min-h-screen flex-col px-4 py-8 container mx-auto">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl prose-h1 my-6">
        Blog
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-6 gap-y-8 w-full min-h-[60vh]">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            key={index}
            className="min-h-[500px] w-full rounded-sm bg-slate-200"
          />
        ))}
      </div>
    </main>
  );
};

export default loading;
