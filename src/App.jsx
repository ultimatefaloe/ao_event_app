import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Counter from "./components/Counter";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/package/react-router",
    element: <Counter />,
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
