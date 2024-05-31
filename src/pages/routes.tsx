import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Signup from "./Signup";

const router = createBrowserRouter([
    {path: '/' , element: <HomePage />},
    {path: '/signup' , element: <Signup />},
]);

export default router;