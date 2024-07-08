import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";

export function CardPost() {
  return (
    <Card className="!prose lg:!prose-xl prose-slate">
      <div className="overflow-hidden">
        <Image
          className="w-full h-auto !m-0 lg:!m-0 rounded-t-lg"
          src="https://placehold.jp/500x500.png"
          alt="placeholder"
          width={300}
          height={120}
        />
      </div>
      <CardHeader>
        <CardTitle>Post Title</CardTitle>
        <div className="flex gap-2 flex-wrap">
          <a
            href="#"
            className="!no-underline !font-normal !text-sm bg-slate-100 px-4 py-1 rounded-full w-auto"
          >
            product
          </a>
          <a
            href="#"
            className="!no-underline !font-normal !text-sm bg-slate-100 px-4 py-1 rounded-full w-auto"
          >
            news
          </a>
          <a
            href="#"
            className="!no-underline !font-normal !text-sm bg-slate-100 px-4 py-1 rounded-full w-auto"
          >
            technology
          </a>
        </div>
      </CardHeader>
      <CardContent>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
          velit vel neque semper, at pulvinar enim facilisis...
        </p>
        <p className="">
          <Link href="/blog/123">Read More</Link>
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
        <div className="flex flex-col text-sm">
          <span className="m-0 ">Jane Doe</span>
          <span className="m-0">8th July, 2024</span>
        </div>
      </CardFooter>
    </Card>
  );
}
