"use client";

import { useTodos } from "@/hooks/use-create-todo";
import { Card, CardContent } from "./ui/card";
import { Loader2 } from "lucide-react";
import { useTodoStore } from "@/store/useTodoStore";
import TodoItem from "./TodoItem";
import { useEffect, useMemo } from "react";

function TodoList() {
  const { data, isLoading, error } = useTodos();

  const todos = useTodoStore((state: any) => state.todos);
  const setTodos = useTodoStore((state: any) => state.setTodos);
  const filter = useTodoStore((state: any) => state.filter); // filters list

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo: any) => !todo.completed);
      case "completed":
        return todos.filter((todo: any) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data, setTodos]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading todos...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-destructive">
            Error loading todos: {error.message}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (filteredTodos?.length === 0)
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            {todos?.length === 0
              ? "No todos yet. Create your first one!"
              : "No Todos match the current filter"}
          </p>
        </CardContent>
      </Card>
    );

  return (
    <div className="space-y-3">
      {filteredTodos?.map((todo: any) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
