import { Button } from "@/components/ui/button";
import dbConnect from "../lib/db";
import TodoForm from "@/components/TodoForm";
export default async function Home() {
  await dbConnect();
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Todo App</h1>
          <p className="text-muted-foreground">
            Built with Next.js, Zustand, Tanstack Query, Zod & Mongoose
          </p>
        </header>

        <main>
          <TodoForm />
        </main>

        <footer className="mt-12 text-center text-sm text-muted-foregorund">
          <p>This app demonstrates CRUD operations with modern React Patters</p>
        </footer>
      </div>
    </div>
  );
}
