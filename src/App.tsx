import { useState } from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AuthContext from "./contexts/authContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storeToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <>
    <AuthContext.Provider value={{storeToken , isLoggedIn , setIsLoggedIn}}>
      {isLoggedIn && <HomePage />}

      {!isLoggedIn && <Login />}
      </AuthContext.Provider>
    </>
  );
};

export default App;
