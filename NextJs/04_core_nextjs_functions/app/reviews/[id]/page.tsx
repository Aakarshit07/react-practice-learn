import { notFound, redirect } from "next/navigation";

const ReviewDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  if (parseInt(id) > 10 && parseInt(id) < 15) {
    redirect("/reviews/20");
  } else if (parseInt(id) > 25) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-bold underline my-8">
        Reviews: {id == "20" && "Redirecting to: "}
        {id}
      </h1>
    </div>
  );
};

export default ReviewDetail;
