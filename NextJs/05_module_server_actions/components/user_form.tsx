"use client";

import { createUser } from "@/actions";
import { useActionState } from "react";

const UserForm = () => {
  const [state, formAction] = useActionState(createUser, null);
  return (
    <form action={formAction}>
      <input type="text" name="name" placeholder="Jhon Doe" />
      <button type="submit">Create</button>
      {state?.error && <p>{state?.error}</p>}
    </form>
  );
};

export default UserForm;
