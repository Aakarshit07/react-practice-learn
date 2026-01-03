"use client";

import { useParams } from "next/navigation";

const ProductIdSlugPage = () => {
  const params = useParams();
  return (
    <div className="p-4">
      Product Id: {params?.id}, <br /> Slug: {params?.slug}
    </div>
  );
};

export default ProductIdSlugPage;
