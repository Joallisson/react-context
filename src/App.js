import React from "react";
import { AuthContext } from "./providers/auth";

function App() {
  const {user, setUser} = React.useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <h1 style={{color: user.color}}>Olá Mundo!</h1>
      <input type='text' onChange={(event => setUser({name: event.target.value}))}/>
    </div>
  );
}

export default App;
