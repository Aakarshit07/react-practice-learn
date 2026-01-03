import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-amber-500">
      <Image src="/404.svg" alt="404 page not found" width={360} height={360} />
      <p className="text-2xl text-gray-600 my-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
      >
        Try Again
      </Link>
    </div>
  );
}
