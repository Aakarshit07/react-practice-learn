import React from "react";
type DocPageProps = {
  params: {
    slug: string[];
  };
};
const DocPage = async ({ params }: DocPageProps) => {
  const res = await params;
  return (
    <div>
      <h1>Welcome to All Catch Route</h1>
      Params : {res?.slug?.join("/")}
    </div>
  );
};

export default DocPage;
