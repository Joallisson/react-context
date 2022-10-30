import React from "react";
import { Login } from "./components/Login";
import { Profile } from "./components/profile";
import { useAuth } from "./providers/auth";

function App() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
