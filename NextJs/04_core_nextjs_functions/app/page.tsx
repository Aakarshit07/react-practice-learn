import Image from "next/image";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/timer", {
    cache: "force-cache",
    next: { revalidate: 3600, tags: ["timer"] },
  });
  const data = await response.json();

  console.log("Timer API Response:", data);
  return (
    <div>
      <h1>NextJs Response (Default)</h1>
      <p>Time: {data.readable}</p>
      <p>Request ID: {data.requestId}</p>
    </div>
  );
}
