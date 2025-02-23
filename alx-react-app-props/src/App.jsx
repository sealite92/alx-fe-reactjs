import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfilePage from "./ProfilePage";
import UserProvider from "./UserContext";
import UserInfo from "./UserInfo";
import UserDetails from "./UserDetails";

function App() {
  return (
    <UserProvider>
      <ProfilePage />;
      <UserInfo />
      <UserDetails />
    </UserProvider>
  );
}

export default App;
