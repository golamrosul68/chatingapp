import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./pages/notFound";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
