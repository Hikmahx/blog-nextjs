import { getPost } from "@/lib/post";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = decodeURI(params.id);

  const data = await getPost(id);

  return {
    title: data.title,
    description: data.title,
    authors: data.author.name,
    keywords: data.hashtags.join(", "),
    openGraph: {
      type: "article",
      title: data.title,
      description: data.title,
      images: data.img,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const data = await getPost(id);

  return (
    <main className="py-20">
      <div className="container max-w-xl lg:max-w-[820px] mx-auto px-4 py-6 md:px-6 ">
        <Link href="/blog" className="flex items-center my-2 prose pb-12">
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
        <article className="prose prose-img:rounded-xl !max-w-none mt-2">
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
            <div className="flex flex-wrap gap-3">
              {data.hashtags.map((tag: string, index: number) => (
                <Link
                  href={`/${tag}`}
                  key={`${tag}-${index}`}
                  className="uppercase !font-normal text-[8px] lg:!text-[10px] text-slate-500 py-1 rounded-full w-auto"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <Image
                className="w-full max-w-[810px] mx-auto h-auto bg-slate-300 rounded-lg my-2 object-cover"
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
