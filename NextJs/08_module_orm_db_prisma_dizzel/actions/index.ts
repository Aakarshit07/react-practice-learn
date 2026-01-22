"use server";
import { prisma } from "@/lib/db";

export const seedDB = async () => {
  await prisma.post.createMany({
    data: [
      { title: "First Post" },
      { title: "Second Post" },
      { title: "Third Post" },
    ],
  });
  console.log(`[seed] Data seeded successfully !`);
};

export const createPost = async (title: string, description: string) => {
  const post = await prisma.post.create({
    data: {
      title: title,
      description: description,
    },
  });
  return {
    success: true,
    data: post,
  };
};
