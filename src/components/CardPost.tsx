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
  hashtags: string[];
  author: {
    name: string;
    avatar: string;
  };
  img: string;
  createdAt: string;
};

function CardPost({ post }: { post: PostProps }) {
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
      <CardHeader className="py-3 space-y-0">
        <CardTitle>{post.title}</CardTitle>
        <div className="flex gap-2 flex-wrap">
          {post.hashtags.map((tag, index) => (
            <a
              key={`${tag}-${index}`}
              href={`/tags/${tag}`}
              className="!no-underline !font-normal !text-sm bg-slate-100 px-4 py-1 rounded-full w-auto"
            >
              {tag}
            </a>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-0">
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          eveniet explicabo assumenda consectetur quibusdam facilis suscipit ut
          beatae possimus quae...
        </p>
      </CardContent>
      <CardFooter className="grid">
        <Link href={`/blog/${post._id}`}>Read More</Link>

        <div className="flex items-center gap-2">
          <div>
            <Image
              className="w-10 h-10 bg-slate-300 !rounded-full my-2"
              src={post.author.avatar}
              alt="placeholder"
              width={40}
              height={40}
            />
          </div>{" "}
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

export default CardPost;
