"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function fetchUsers() {
  const res = await fetch("/api/users");

  return res.json();
}

const UsersList = () => {
  const {
    data: users,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  console.log("Data:", users);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users List (useQuery Example)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {users?.map((user: any) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 border rounded"
            >
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-muted-foreground">
                  {user.email}
                </div>
              </div>
              {/* <Button
                variant="destructive"
                size="sm"
                className={"cursor-pointer"}
                onClick={() => deleteMutation.mutate(user.id)}
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending ? "Deleting..." : "Delete"}
              </Button> */}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersList;
