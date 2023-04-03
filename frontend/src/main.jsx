/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import App from "./App";
import NotableWinners from "./components/NotableWinners/NotableWinners";
import Chemistry from "./components/Chemistry/Chemistry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/notablewinners",
    element: <NotableWinners />,
  },
  {
    path: "/chemistry",
    element: <Chemistry />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
