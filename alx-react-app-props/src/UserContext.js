import React from "react";
import { createContext, useState } from "react";

const UserContext = createContext();

export default function User({ userData }) {
  const [user, setUser] = useState(null); // Default value for user state

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {userData}
    </UserContext.Provider>
  );
}
