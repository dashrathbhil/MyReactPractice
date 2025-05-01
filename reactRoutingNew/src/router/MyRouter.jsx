import React from "react";
import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar";
import ExampleCompo from "../example/ExampleCompo";
import FundamentalsRoute from "../pages/fundamentals/fundamentalsRoute";
import HooksRoute from "../pages/hooks/HooksRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar /> <div>Home</div>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <div>About</div>
      </>
    ),
  },
  {
    path: "/example",
    element: (
      <>
        <Navbar /> <ExampleCompo />
      </>
    ),
    children: [
      {
        path: "fundamentals/*",
        element: <FundamentalsRoute />,
      },
      {
        path: "hooks/*",
        element: <HooksRoute />,
      },
    ],
  },
]);

export default router;
