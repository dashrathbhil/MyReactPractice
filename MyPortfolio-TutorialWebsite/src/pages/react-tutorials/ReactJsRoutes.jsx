import React from "react";
import { useRoutes } from "react-router";
import ReactJsMenu from "./ReactJsMenu";
import reactTopics from "./datatopics/ReactTopics";
const reactTopicsRoutes = reactTopics.flatMap((section) =>
  section.topics.map((topic) => ({
    path: topic.path,
    element: topic.element,
  }))
);
function ReactJsRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <ReactJsMenu />,
      children: reactTopicsRoutes,
    },
  ]);
  return routes;
}
export default ReactJsRoutes;
