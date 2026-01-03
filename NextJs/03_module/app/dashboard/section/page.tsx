import Link from "next/link";

const SectionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-semibold">Section Page</h1>
      <Link href={"/settings"}>Go to Settings</Link>
      <Link href={"/admin"}>Go to Admin</Link>
    </div>
  );
};

export default SectionPage;
