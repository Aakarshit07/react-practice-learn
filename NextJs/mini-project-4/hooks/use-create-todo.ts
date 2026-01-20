import { useTodoStore } from "@/store/useTodoStore";

export function useTodos() {
  const setTodos = useTodoStore((state: any) => state.setTodos);
}
