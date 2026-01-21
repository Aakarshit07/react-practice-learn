import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useTodoStore = create(
  devtools(
    (set: any, get: any) => ({
      todos: [],
      filter: "all",
      isLoading: false,

      setTodos: (todos: any) => set({ todos }),
      addTodos: (todos: any) =>
        set((state: any) => ({
          todos: [todos, ...state.todos],
        })),

      updateTodo: (id: any, updates: any) => {
        set((state: any) => ({
          todos: state.todos.map((todo: any) =>
            todo._id === id ? { ...todo, ...updates } : todo,
          ),
        }));
      },

      removeTodo: (id: any) => {
        set((state: any) => ({
          todos: state.todos.filter((todo: any) => todo._id !== id),
        }));
      },

      setFilter: (filter: any) => set({ filter }),
      setLoading: (isLoading: boolean) => set({ isLoading }),

      filteredTodos: () => {
        const { todos, filter } = get();
        switch (filter) {
          case "active":
            return todos.filter((todo: any) => !todo.completed);
          case "completed":
            return todos.filter((todo: any) => todo.completed);
          default:
            return todos;
        }
      },

      completedCount: () =>
        get().todos.filter((todo: any) => todo.completed).length,

      activeCount: () =>
        get().todos.filter((todo: any) => !todo.completed).length,
    }),
    { name: "todo-store" },
  ),
);
