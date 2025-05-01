import React from "react";
import { useRoutes } from "react-router";
import HooksMenu from "./HooksMenu";

import ExplainUseEffectHook from "./UseEffectHook/ExplainUseEffectHook";
import ExplainUseState from "./UseStateHook/ExplainUseState";
import TaskUseState from "./UseStateHook/TaskUseState/TaskUseState";
import UseStateMenu from "./UseStateHook/UseStateMenu";
import ExplainUseReduce from "./UseReduceHook/ExplainUseReduce";
import UseRef from "./UseRefHook/UseRef";

function HooksRoute() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HooksMenu />,
      children: [
        {
          path: "usestatemenu",
          element: <UseStateMenu />,
          children: [
            {
              path: "explainusestate",
              element: <ExplainUseState />,
            },
            {
              path: "taskofusestate",
              element: <TaskUseState />,
            },
          ],
        },
        {
          path: "explainuseeffect",
          element: <ExplainUseEffectHook />,
        },
        {
          path: "usereducehook",
          element: <ExplainUseReduce />,
        },
        {
          path:"use-ref-hook",
          element:<UseRef/>
        }
      ],
    },
  ]);
  return routes;
}

export default HooksRoute;
