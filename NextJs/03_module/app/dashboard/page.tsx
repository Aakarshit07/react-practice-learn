import Link from "next/link";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link href={"/dashboard/reports"}>View Reports</Link>
      <Link href={"/profile"}>Go to profile</Link>
    </div>
  );
};

export default DashboardPage;
