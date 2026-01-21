"use server";

import dbConnect from "@/lib/db";
import Todo from "@/model/todo";
import { createToDoSchema } from "@/validations/validation";
import { revalidatePath } from "next/cache";
import { todo } from "node:test";

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

export async function getTodos() {
  try {
    await dbConnect();
    const todoList = await Todo.find({}).sort({ createdAt: -1 });

    return {
      success: true,
      data: JSON.parse(JSON.stringify(todoList)),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch todos",
    };
  }
}

export async function toggleTodo(todoId: any) {
  try {
    await dbConnect();

    const todo = await Todo.findById(todoId);
    if (!todo) {
      return {
        success: false,
        error: "Todo not found",
      };
    }

    todo.completed = !todo.completed; // toggling the value we are receiving from the current todo
    await todo.save();
    revalidatePath("/");
    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to update todo status",
    };
  }
}

export async function deleteTodo(todoId: any) {
  try {
    await dbConnect();
    const todo = await Todo.findByIdAndDelete(todoId);
    if (!todo) {
      return {
        success: false,
        error: "Todo not found",
      };
    }

    revalidatePath("/");
    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete todo",
    };
  }
}
