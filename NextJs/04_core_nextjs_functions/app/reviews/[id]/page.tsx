import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  if (parseInt(id) > 10) return notFound();
  return <div>Reviews: {id}</div>;
};

export default ReviewDetail;
