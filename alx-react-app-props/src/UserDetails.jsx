import React, { useContext } from "react";
import UserContext from "./components/UserContext";

export default function UserDetails() {
  const user = useContext(UserContext);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
