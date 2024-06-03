import { createBrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import App from "../App";
import RecipeDetails from "../components/RecipeDetails";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/recipes/:id", element: <RecipeDetails /> },
]);

export default router;
