import Image from "next/image";

export const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <main>
      <article className="px-4 py-6 space-y-6 md:px-6 md:space-y-10 container mx-auto">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">
            Blog Post Title
          </h1>
          <p className="text-sm text-gray-500">Route: {`${id}`}</p>
          <nav className="flex flex-col gap-1 text-sm sm:flex-row sm:gap-2">
            <span className="text-gray-500 ">Posted on July 9, 2024</span>
          </nav>
        </section>
        <section className="prose prose-gray max-w-none not-italic">
          <h2 className="sr-only">page content</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicings elit. Esse
            aperiam facere optio dolorum aspernatur alias natus, odit animi
            distinctio eos expedita incidunt quam eius exercitationem totam
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            aperiam facere optio dolorum aspernatur alias natus, odit animi
            distinctio eos expedita incidunt quam eius exercitationem totam
          </p>
          <p>
            And then, one day, the people of the kingdom discovered that the
            jokes left by Jokester were so funny that they couldn&apos;t help
            but laugh. And once they started laughing, they couldn&apos;t stop.
          </p>
          <figure>
            <Image
              src="https://placehold.jp/500x500.png"
              alt="Cover image"
              width={750}
              height={422}
              className="aspect-video overflow-hidden rounded-lg object-cover"
            />
            <figcaption>Image caption goes here</figcaption>
          </figure>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            aperiam facere optio dolorum <a href="#">link here</a>: Esse aperiam
            facere optio dolorum
          </p>
          <blockquote>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            aperiam facere optio dolorum aspernatur alias natus, odit animi
            distinctio eos expedita incidunt quam eius exercitationem totam
          </blockquote>
          <h3>Lorem ipsum, dolor</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            aperiam facere optio dolorum
          </p>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur</li>
            <li>Lorem ipsum, dolor sit amet consectetur</li>
            <li>Lorem ipsum, dolor sit amet consectetur</li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            aperiam facere optio dolorum aspernatur alias natus, odit animi
            distinctio eos expedita incidunt quam eius exercitationem totam
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            About the Author
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            aperiam facere optio dolorum aspernatur alias natus, odit animi
            distinctio eos expedita incidunt quam eius exercitationem totam
            molestias maiores asperiores possimus?
          </p>
        </section>
      </article>
    </main>
  );
};

export default Page;
