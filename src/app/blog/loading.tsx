import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-6 gap-y-8 w-full min-h-[60vh]">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          key={index}
          className="min-h-[500px] w-full rounded-sm bg-slate-200"
        />
      ))}
    </div>
  );
};

export default loading;
