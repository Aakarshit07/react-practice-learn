"use server";

export async function createUser(prevState: any, formData: FormData) {
  const name = formData.get("name");

  if (!name) {
    return { error: "Name is required" };
  }

  console.log("Creating user:", name);

  return { success: true };
}
