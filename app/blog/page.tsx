import Link from "next/link";
import Image from "next/image";
import CalendarIcon from "@/components/icons/calendar";

export default function Component() {
  return (
    <section className="w-full  bg-gray-950 text-gray-200">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
            Blog Posts
          </div>
          <h2 className="text-2xl font-bold tracking-tighter text-gray-200 md:text-3xl/tight lg:text-4xl">
            Exploring My Thought
          </h2>
          <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Welcome to my blog! Here, I delve into the exciting world of web
            development with insightful articles, tips, and behind-the-scenes
            experiences.
          </p>
        </div>
        <div className="flex flex-col gap-8 py-12  bg-gray-950 text-gray-200">
          <div className="space-y-8">
            <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 rounded-lg border border-gray-800 p-6 shadow-sm transition-all hover:border-gray-700 hover:shadow-md">
              <Image
                alt="Blog Post Image"
                className="rounded-lg object-cover border border-gray-800"
                height={150}
                src="/images/blog/from-ember-to-next.png"
                style={{
                  aspectRatio: "200/150",
                  objectFit: "cover",
                }}
                width={200}
              />
              <div className="space-y-2">
                <Link
                  className="text-gray-200 font-bold text-lg hover:underline"
                  href="#"
                >
                  From Ember.js to Next.js: A Tale of Two Frameworks
                </Link>
                <div className="text-gray-400 text-sm">
                  <span>May 7, 2024</span>
                </div>
                <p className="text-gray-300 line-clamp-3 text-sm">
                  Explore the differences and surprising similarities between
                  Ember.js and Next.js, two powerful contenders in the web
                  development world.
                </p>
                <div className="flex flex-wrap gap-2 text-sm pt-2">
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    Ember.js
                  </Link>
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    Next.js
                  </Link>
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    JavaScript
                  </Link>
                </div>
              </div>
            </article>
            <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 rounded-lg border border-gray-800 p-6 shadow-sm transition-all hover:border-gray-700 hover:shadow-md">
              <Image
                alt="Blog Post Image"
                className="rounded-lg object-cover"
                height={150}
                src="/images/blog/the-typescript-tightrope.png"
                style={{
                  aspectRatio: "200/150",
                  objectFit: "cover",
                }}
                width={200}
              />
              <div className="space-y-2">
                <Link
                  className="text-gray-200 font-bold text-lg hover:underline"
                  href="#"
                >
                  The Typescript Tightrope: A Love-Hate Journey
                </Link>
                <div className="text-gray-400 text-sm">
                  <span>May 4, 2024</span>
                </div>
                <p className="text-gray-300 line-clamp-3 text-sm">
                  My journey from TypeScript skeptic to enthusiast - how static
                  typing transformed my code and why I believe it's the future.
                </p>
                <div className="flex flex-wrap gap-2 text-sm pt-2">
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    Web Development
                  </Link>
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    TypeScript
                  </Link>
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    Lessons Learned
                  </Link>
                </div>
              </div>
            </article>
            <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 rounded-lg border border-gray-800 p-6 shadow-sm transition-all hover:border-gray-700 hover:shadow-md">
              <Image
                alt="Blog Post Image"
                className="rounded-lg object-cover border border-gray-800"
                height={150}
                src="/images/blog/building-my-developer-playground.png"
                style={{
                  aspectRatio: "200/150",
                  objectFit: "cover",
                }}
                width={200}
              />
              <div className="space-y-2">
                <Link
                  className="text-gray-200 font-bold text-lg hover:underline"
                  href="#"
                >
                  Building My Developer Playground
                </Link>
                <div className="text-gray-400 text-sm">
                  <span>May 1, 2024</span>
                </div>
                <p className="text-gray-300 line-clamp-3 text-sm">
                  Dive into the code behind the scenes! Explore the decisions
                  and thought process behind building my personal website.
                </p>
                <div className="flex flex-wrap gap-2 text-sm pt-2">
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    Web Development
                  </Link>
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    Next.js
                  </Link>
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    React
                  </Link>
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    Tailwind CSS
                  </Link>
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    TypeScript
                  </Link>
                  <Link
                    className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full hover:bg-gray-600 hover:text-gray-200"
                    href="#"
                  >
                    Vercel
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
