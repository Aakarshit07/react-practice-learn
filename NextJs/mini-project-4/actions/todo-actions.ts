"use server";

import dbConnect from "@/lib/db";
import Todo from "@/model/todo";
import { createToDoSchema } from "@/validations/validation";
import { revalidatePath } from "next/cache";

export async function createTodo(data: any) {
  try {
    const validateDate = createToDoSchema.parse(data);
    await dbConnect();

    const todo = await Todo.create(validateDate);
    revalidatePath("/");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create todo",
    };
  }
}
