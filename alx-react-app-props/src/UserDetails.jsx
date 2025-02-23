import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function UserDetails() {
  const { user, setUser } = useContext(UserContext);
  setUser({ name: "Jane Doe", email: "jane.doe@example.com" });
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
