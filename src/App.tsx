import { useContext, useEffect } from "react";
import HomePage from "./pages/HomePage";
import AuthContext from "./contexts/authContext";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  });
  
  return (
    <HomePage />
  );
};

export default App;
