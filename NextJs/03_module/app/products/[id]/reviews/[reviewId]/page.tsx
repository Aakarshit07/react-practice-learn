import React from "react";
type ReviewPageProps = {
  params: {
    id: string;
    reviewId: string;
  };
};

const ReviewPage = async ({ params }: ReviewPageProps) => {
  const { id, reviewId } = await params;

  return (
    <div>
      ReviewPage {reviewId} id: {id}
    </div>
  );
};

export default ReviewPage;
