let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Pix Ley", email: "pix@example.com" },
  { id: 3, name: "Mei Rees", email: "mai@example.com" },
  { id: 4, name: "Sei Haruna", email: "sei@example.com" },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Response.json(users);
}

export async function POST(request: any) {
  const body = await request.json();
  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };
  users.push(newUser);
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Response.json(newUser);
}
