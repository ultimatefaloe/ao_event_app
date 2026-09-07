import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Events from "./pages/Events";
import NewEvent from "./pages/NewEvent";
import RootLayout from "./components/layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/new",
        element: <NewEvent />,
      },
      {
        path: "/events/:id", //id less user experience  and slug improves user experience
        element: <Events />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
