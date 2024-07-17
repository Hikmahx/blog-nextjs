import React from "react";
import BackButton from "@/components/BackButton";
import { getPost } from "@/lib/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Post } from "@/lib/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";


type Metadata = {
  title: string;
  description?: string;
  authors?: string;
  keywords?: string;
  openGraph?: {
    type: string;
    title: string;
    description: string;
    images: string;
  };
};

const components = {
  SyntaxHighlighter: ({
    children,
    language,
  }: {
    children: string;
    language: string;
  }) => (
    <SyntaxHighlighter language={language} style={atomOneDark}>
      {children}
    </SyntaxHighlighter>
  ),
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = decodeURI(params.slug);

  const data: Post = await getPost(slug);

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

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const data: Post = await getPost(slug);

  return (
    <main className="pb-20">
      <div className="container max-w-xl lg:max-w-[820px] mx-auto px-4 py-6 md:px-6 ">
        <BackButton />
        <article className="prose prose-img:rounded-xl !max-w-none mt-2">
          <section className="">
            <h1 className="text-3xl font-bold tracking-wide sm:text-4xl xl:text-5xl capitalize mb-2">
              {data.title}
            </h1>
            <div className="flex items-center gap-2 pb-3">
              <div>
                <Image
                  className="w-10 h-10 bg-slate-300 !rounded-full my-2"
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
                <span
                  key={`${tag}-${index}`}
                  className="uppercase !font-normal text-[8px] lg:!text-[10px] text-slate-500 py-1 rounded-full w-auto"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="my-5">
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
            <MDXRemote source={data.content} components={components} />
          </section>
        </article>
      </div>
    </main>
  );
}
