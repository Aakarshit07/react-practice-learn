import Link from "next/link";

const DashboardmainLayout = ({ tab1, tab2 }: any) => {
  return (
    <div className="flex gap-5">
      <nav className="mb-3">
        <Link href={"/dashboard-main/tab1"}>Tab 1</Link>
        {" | "} <Link href={"/dashboard-main/tab2"}>Tab 2</Link>
      </nav>
      <div>
        {tab1} {tab2}
      </div>
    </div>
  );
};

export default DashboardmainLayout;
