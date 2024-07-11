import { getPost } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const data = await getPost(id);
  console.log(data);

  return (
    <main className="py-20">
      <div className="container max-w-xl lg:max-w-5xl mx-auto px-4 py-6 md:px-6 ">
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
        <article className="prose prose-img:rounded-xl prose-a:text-blue-600 !max-w-none">
          <section className="">
            <h1 className="text-3xl font-bold tracking-wider sm:text-4xl xl:text-5xl capitalize mb-2">
              {data.title}
            </h1>
            <div className="flex items-center gap-2 pb-3">
              <div>
                <Image
                  className="w-10 h-10 bg-slate-300 rounded-full my-2"
                  src={data.author.avatar}
                  alt="placeholder"
                  width={40}
                  height={40}
                />
              </div>
              <span className="prose mr-2 font-bold capitalize">
                {data.author.name}
              </span>
              <span className="text-gray-500 ">
                {new Date(data.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="mt-5">
              <Image
                className="w-full h-auto bg-slate-300 rounded-lg my-2"
                src={data.img}
                alt="placeholder"
                width={400}
                height={400}
              />
            </div>
          </section>
          <section className="prose prose-gray max-w-none not-italic">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </section>
        </article>
      </div>
    </main>
  );
}
