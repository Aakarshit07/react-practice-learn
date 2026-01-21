import {
  createTodo,
  deleteTodo,
  getTodos,
  toggleTodo,
} from "@/actions/todo-actions";
import { useTodoStore } from "@/store/useTodoStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const todoKeys = {
  all: ["todo"],
  lists: () => [...todoKeys.all, "listss"],
};

export function useCreateTodo() {
  const queryClient = useQueryClient();

  const addTodos = useTodoStore((state: any) => state.addTodos);

  return useMutation({
    mutationFn: (data) => createTodo(data),
    onSuccess: (result) => {
      if (result.success) {
        addTodos(result.data);
        queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
      }
    },
  });
}

// Server Actions ---> useTodos -> setTodos -> Update UI
export function useTodos() {
  const setTodos = useTodoStore((state: any) => state.setTodos);

  return useQuery({
    queryKey: todoKeys.lists(),
    queryFn: async () => {
      const result = await getTodos();
      console.log("results: ", result);
      if (result.success) {
        // update the zustand store with the fetched data.
        setTodos(result.data);

        return result.data;
      }
      throw new Error(result.error);
    },
  });
}

export function useToggleTodo() {
  const queryClient = useQueryClient();

  const updateTodoInStore = useTodoStore((state: any) => state.updateTodo);

  return useMutation({
    mutationFn: (id) => toggleTodo(id),
    onSuccess: (result, todoId) => {
      if (result.success) {
        updateTodoInStore(todoId, { completed: result.data.completed });
        queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
      }
    },
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const removeTodo = useTodoStore((state: any) => state.removeTodo);

  return useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: (result, todoId) => {
      if (result.success) {
        removeTodo(todoId);
        queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
      }
    },
  });
}
