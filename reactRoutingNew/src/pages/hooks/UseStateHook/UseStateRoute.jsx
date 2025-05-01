import React from "react";
import { Routes, useRoutes } from "react-router";
import UseStateMenu from "./UseStateMenu";
import ExplainUseState from "./ExplainUseState";
import TaskOfUseState from "./TaskOfUseState";


function UseStateRoute() {
  const routes = useRoutes([
    {
      path: "/",
      element: <UseStateMenu />,
      children: [
        {
          path: "explainusestate",
          element: <ExplainUseState />,
        },
        {
          path: "taskofusestate",
          element: <TaskOfUseState />,
        },
      ],
    },
  ]);

  return routes;
}

export default UseStateRoute;
