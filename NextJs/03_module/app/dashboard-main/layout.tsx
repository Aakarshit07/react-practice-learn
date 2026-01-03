import React from "react";

const DashboardmainLayout = ({ feed, stats }: any) => {
  return (
    <div className="flex gap-5">
      <div className="flex-2">{feed}</div>
      <div className="flex-1">{stats}</div>
    </div>
  );
};

export default DashboardmainLayout;
