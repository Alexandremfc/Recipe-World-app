import { createBrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

export default router;
