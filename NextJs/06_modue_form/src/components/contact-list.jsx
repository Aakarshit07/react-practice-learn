import { getContacts, updateContactStatus } from "@/actions";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const STATUS = {
  NEW: "new",
  READ: "read",
  REPLIED: "replied",
};

const ContactList = async () => {
  const contactsList = await getContacts();
  return (
    <div className="w-full flex flex-col items-center flex-wrap gap-8">
      <div className="w-full flex items-center justify-between border-b-2 pb-4">
        <h1 className="text-2xl font-bold">Contact Messages</h1>
        <Badge variant="secondary">{contactsList.length} message</Badge>
      </div>
      <div className="w-full flex items-center flex-wrap gap-6 rounded-md bg-neutral-200 p-4 transition-all ease-in-out duration-300">
        {contactsList && contactsList.length > 0 ? (
          contactsList.map((contact) => (
            <Card
              className="w-full max-w-xs min-h-32 p-3.5 gap-2 group hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-fuchsia-50  hover:text-fuchsia-600 hover:border-fuchsia-600"
              key={contact._id}
            >
              <CardHeader className={"px-0"}>
                <CardTitle>{contact?.name}</CardTitle>
                <CardDescription>{contact?.subject}</CardDescription>
                <CardDescription>{contact?.email}</CardDescription>
              </CardHeader>
              <CardContent className={"px-0"}>
                <p className="text-sm ellipsis line-clamp-1 group-hover:line-clamp-none">
                  {contact?.message}
                </p>
              </CardContent>
              <CardFooter
                className={
                  "px-0 border-t-2 items-center justify-between group-hover:border-fuchsia-600"
                }
              >
                <Badge className={"mt-2 group-hover:bg-fuchsia-600"}>
                  <p className="capitalize">{contact?.status}</p>
                </Badge>
                <div className="mt-2">
                  {contact?.status === STATUS.NEW && (
                    <form
                      action={async () => {
                        "use server";
                        await updateContactStatus(contact?._id, STATUS.READ);
                        toast.success("Status Updated successfully!");
                      }}
                    >
                      <Button variant="outline" className={"cursor-pointer"}>
                        Mark as Read
                      </Button>
                    </form>
                  )}
                  {contact?.status === STATUS.READ && (
                    <form
                      action={async () => {
                        "use server";
                        await updateContactStatus(contact?._id, STATUS.REPLIED);
                        toast.success("Status Updated successfully!");
                      }}
                    >
                      <Button variant="secondary" className={"cursor-pointer"}>
                        Mark as Replied
                      </Button>
                    </form>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="w-full flex items-center justify-center min-h-56 rounded-md bg-neutral-200">
            <Badge className={"bg-neutral-500 text-white p-2 rounded-md"}>
              No messages
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
