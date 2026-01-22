import { seedDB } from "@/actions";
import Image from "next/image";

export default async function Home() {
  // await seedDB();
  // const posts = await prisma.post.findMany();

  return (
    <div className="mx-auto max-w-xl p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-balance">
          Prisma + Next.js (Basic)
        </h1>
        <p className="text-sm text-gray-600">
          Minimal example showing Prisma in a Next.js Route Handler with a tiny
          UI.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Add a post</h2>
        <form>
          {/* action={createPost} */}
          <input name="title" placeholder="Enter your title" />
          <input name="description" placeholder="Enter your title" />
          <button type="submit">Create Post</button>
        </form>
      </section>

      {/* <PostList posts={posts} /> */}
    </div>
  );
}
