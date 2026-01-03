import React from "react";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  console.log("params: ", id);

  return <div>ProductPage {id}</div>;
};

export default ProductPage;
