import React, { useState } from "react";
import UserContext from './store/UserContext';
import GlobalStyle from "./assets/style/GlobalStyle";
import RoutesConfig from "./RoutesConfig/RoutesConfig";

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    token: '',
  });

  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }} >
        <RoutesConfig />
      </UserContext.Provider>
    </div>
  );
}

export default App;
