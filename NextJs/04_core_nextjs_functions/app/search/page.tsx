"use client";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");
  const category = searchParams.get("category");
  const page = searchParams.get("page");

  const allParams = Array.from(searchParams.entries());
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline my-8">
        Please Add Search Params In URL
      </h1>
      <section className="text-sm italic font-mono font-semibold">
        Query: {query}
        <br />
        Category: {category}
        <br />
        Page: {page}
      </section>

      <section className="my-6">
        <h2 className="my-2 font-bold text-lg text-amber-500">
          All Params, Returned in Form of Array
        </h2>
        {allParams.map(([key, value]) => (
          <div key={key + "-" + value}>
            {key}: {value}
          </div>
        ))}
      </section>
    </div>
  );
}
