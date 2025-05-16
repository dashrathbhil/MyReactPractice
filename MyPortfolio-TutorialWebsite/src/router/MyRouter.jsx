import React from "react";
import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar";
import Portfolio from "../pages/portfolio/Portfolio";
import NodeJsMenu from "../pages/node-tutorials/NodeJsMenu";
import ProjectsMenu from "../pages/projects/ProjectsMenu";
import ReactTopics from "../pages/react-tutorials/datatopics/ReactTopics";
import ReactJsRoutes from "../pages/react-tutorials/ReactJsRoutes"
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
    path: "/portfolio",
    element: (
      <>
        <Navbar /> <Portfolio />
      </>
    ),
  },
  {
    path: "reactjs-tutorials/*",
    element: (
      <>
        <Navbar /> <ReactJsRoutes/>
      </>
    ),
    children:ReactTopics,
  },
  {
    path: "nodejs-tutorials/*",
    element: (
      <>
        <Navbar /> < NodeJsMenu/>
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <Navbar /> < ProjectsMenu/>
      </>
    ),
  },
]);

export default router;
