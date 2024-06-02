import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Signup from "./Signup";
import Login from "./Login";

const router = createBrowserRouter([
    {path: '/' , element: <HomePage />},
    {path: '/signup' , element: <Signup />},
    {path: '/login' , element: <Login />},
]);

export default router;