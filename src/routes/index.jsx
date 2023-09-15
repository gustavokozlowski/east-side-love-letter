import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/auth";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
]);
