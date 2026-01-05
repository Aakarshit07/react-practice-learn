"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleOnlogin = () => {
    // router.push("/reviews/5");
    router.prefetch("/reviews/5");
    router.replace("/reviews/5");
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <button
        className="text-3xl font-bold border-2 cursor-pointer rounded-lg shadow-xs px-2 py-1 font-mono hover:bg-blue-500 text-white"
        onClick={handleOnlogin}
      >
        Login
      </button>

      <section className="my-8 space-y-6">
        <h2 className="text-lg text-amber-500 font-bold">
          Difference between router.replace and router.push
        </h2>
        <div>
          on Replace there is not stack history. of from where page we currently
          landed on
        </div>
        <div>
          on Push there is stack history. of from where page we currently landed
          on
        </div>
      </section>
      <div>
        <h2 className="text-lg text-amber-500 font-bold">Router Prefetch</h2>
        <div>
          on prefetch it only prefetches the page in the background and does not
          navigate to the page
        </div>
      </div>
    </div>
  );
}
