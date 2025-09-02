import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/types";

function CardPost({ post }: { post: Post }) {
  return (
    <Card className="w-full !prose lg:!prose-xl prose-slate !max-w-none lg:!max-w-none relative rounded-none shadow-none flex flex-col md:flex-row items-center justify-between border-white border-b border-b-gray-300 first:border-t first:border-t-gray-300 gap-x-4">
      <div className="order-2 md:order-1">
        <Link href={`/blog/${post.slug}`} className="absolute inset-x-0 h-1/2 md:h-full"></Link>
        <CardHeader className="py-1 space-y-0 px-0">
          <div className="flex items-center gap-2">
            <div className="py-5">
              <Image
                className="w-10 h-10 bg-slate-300 !rounded-full !my-2 lg:!my-2"
                src={post.author.avatar}
                alt="placeholder"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col text-xs">
              <span className="m-0 font-bold">{post.author.name}</span>
              <time dateTime={post.createdAt.slice(0, 10)}>
                {new Date(post.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
          <CardTitle className="!my-2 lg:!my-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-0 px-0">
          <p className="font-normal text-base !my-0 lg:!my-0 font-sans text-gray-500 w-full max-w-lg mr-auto">
            {post.content.slice(0, 150) + "..."}
          </p>
        </CardContent>
        <CardFooter className="px-0">
          <div className="flex items-center gap-2 mt-4">
            <div className="flex gap-2 flex-wrap">
              {post.hashtags.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="!no-underline !font-normal !text-sm bg-white border border-black px-4 py-1 rounded-full w-auto"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardFooter>
      </div>
      <div className="overflow-hidden mt-4 md:mt-0 md:order-1 w-full max-w-[308px]">
        <Image
          className="w-full h-auto !m-0 lg:!m-0 rounded-lg"
          src={post.img}
          alt="placeholder"
          width={300}
          height={120}
        />
      </div>
    </Card>
  );
}

export default CardPost;
