import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext";
import UserInfo from "./UserInfo";
import UserDetails from "./UserDetails";

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />;
      <UserInfo />
      <UserDetails />
    </UserContext.Provider>
  );
}

export default App;
