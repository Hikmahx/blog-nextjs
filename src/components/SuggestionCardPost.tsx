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

function SuggestionCardPost({ post }: { post: Post }) {
  return (
    <Card className="!prose lg:!prose-xl prose-slate relative grid grid-rows-[auto_1fr_auto] gap-4 border-none shadow-none">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0"></Link>
      <div className="overflow-hidden">
        <Image
          className="w-full h-auto !m-0 lg:!m-0 rounded-none"
          src={post.img}
          alt="placeholder"
          width={300}
          height={120}
        />
      </div>
      <CardHeader className="py-1 space-y-0 px-0">
        <div className="flex text-xs mt-4 gap-1 text-gray-500">
          <span className="m-0 ">{post.author.name}</span>
          <span className="">|</span>
          <span className="text-4xl"></span>
          <time dateTime={post.createdAt.slice(0, 10)}>
            {new Date(post.createdAt).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
        <CardTitle className="!my-4 lg:!my-4">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-0 px-0">
        <p className="font-normal text-base !my-0 lg:!my-0">
          {post.content.slice(0, 150) + "..."}
        </p>
      </CardContent>
      <CardFooter className="px-0">
        <div className="flex items-center gap-2 mt-4">
          <div className="flex gap-2 flex-wrap relative">
            {post.hashtags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="!no-underline !font-normal !text-sm bg-white border border-black hover:bg-black hover:!text-white transition-all px-4 py-1 rounded-full w-auto"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SuggestionCardPost;
