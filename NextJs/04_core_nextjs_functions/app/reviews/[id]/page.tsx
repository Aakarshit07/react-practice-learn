import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  if (parseInt(id) > 10) return notFound();
  return <div className="flex items-center justify-center">Reviews: {id}</div>;
};

export default ReviewDetail;
