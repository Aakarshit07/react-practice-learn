import AddUserForm from "@/components/addUserForm";
import UsersList from "@/components/UsersList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Tanstack Query Demo
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <AddUserForm />
          <UsersList />
        </div>
      </div>
    </main>
  );
}
