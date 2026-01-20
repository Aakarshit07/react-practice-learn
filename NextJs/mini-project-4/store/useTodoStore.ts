import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useTodoStore = create(
  devtools((set, get) => ({
    todos: [],
    filter: "all",
    isLoading: false,

    setTodos: (todos: any) => set({ todos }),
    addTodos: (todos: any) =>
      set((state: any) => ({
        todos: [todos, ...state.todo],
      })),

    setFilter: (filter: any) => set({ filter }),
    setLoading: (isLoading: boolean) => set({ isLoading }),
  })),
);
