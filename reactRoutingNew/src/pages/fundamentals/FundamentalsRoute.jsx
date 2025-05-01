import React from "react";
import { useRoutes } from "react-router";
import FundamentalsMenu from "./FundamentalsMenu";
import IntroReact from "./IntroReact";
import UnderStandingProps from "./UnderStandingProps";

function FundamentalsRoute() {
  const routes = useRoutes([
    {
      path: "/",
      element: <FundamentalsMenu />,
      children: [
        {
          path: "introreact",
          element: <IntroReact />,
        },
        {
            path:"understandingofprops",
            element:<UnderStandingProps/>
        },
      ],
    },
  ]);
    return routes;
}

export default FundamentalsRoute;
