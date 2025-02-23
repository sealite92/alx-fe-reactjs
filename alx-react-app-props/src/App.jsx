import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext";
import UserInfo from "./UserInfo";
import UserDetails from "./UserDetails";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />;
      <UserInfo />
      <UserDetails />
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
