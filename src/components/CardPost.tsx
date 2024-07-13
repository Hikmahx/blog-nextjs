import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";

type PostProps = {
  _id: number;
  title: string;
  content: string;
  hashtags: string[];
  author: {
    name: string;
    avatar: string;
  };
  img: string;
  createdAt: string;
};

export default function CardPost({ post }: { post: PostProps }) {
  const extractFirstParagraph = (content: string) => {
    const match = content.match(/<p\s[^>]*>(.*?)<\/p>/);
    return match ? match[1].trim() : "";
  };

  const firstParagraph = extractFirstParagraph(post.content);

  return (
    <Card className="!prose lg:!prose-xl prose-slate flex flex-col justify-between">
      <div className="overflow-hidden">
        <Image
          className="w-full h-auto !m-0 lg:!m-0 rounded-t-lg"
          src={post.img}
          alt="placeholder"
          width={300}
          height={120}
        />
      </div>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <div className="flex gap-2 flex-wrap">
          {post.hashtags.map((tag, index) => (
            <a
              key={`${tag}-${index}`}
              href="#"
              className="!no-underline !font-normal !text-sm bg-slate-100 px-4 py-1 rounded-full w-auto"
            >
              {tag}
            </a>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p>{firstParagraph.substring(0, 100)}...</p>
      </CardContent>
      <CardFooter className="grid">
        <p>
          <Link href={`/blog/${post._id}`}>Read More</Link>
        </p>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
          <div className="flex flex-col text-sm">
            <span className="m-0 ">{post.author.name}</span>
            <time dateTime={post.createdAt.slice(0, 10)}>
              {new Date(post.createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
