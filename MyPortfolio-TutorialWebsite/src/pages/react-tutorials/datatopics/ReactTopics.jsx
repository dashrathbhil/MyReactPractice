import Components from "../topics/Fundamentals/Components";
import ConditionalRendering from "../topics/Fundamentals/conditionalrendering/ConditionalRendering";
import EventHandling from "../topics/Fundamentals/EventHandling/EventHandling";
import IntroReact from "../topics/Fundamentals/IntroReact";
import Jsx from "../topics/Fundamentals/Jsx";
import RenderingListsAndKeys from "../topics/Fundamentals/Listandkeysrendering/RenderingListsAndKeys";
import Props from "../topics/Fundamentals/props/Props";
import StylesCss from "../topics/Fundamentals/css/StylesCss";
import IntroHooks from"../topics/Hooks/introductionofhooks/IntroHooks"
import UseState from "../topics/Hooks/usestatehook/UseState";
import UseEffect from "../topics/Hooks/useeffecthook/UseEffect";
import UseRef from "../topics/Hooks/userefhook/UseRef";
import UseContext from "../topics/Hooks/usecontexthook/UseContext";
import UseReducer from "../topics/Hooks/usereducerhook/UseReducer";
import UseMemo from "../topics/Hooks/usememohook/UseMemo";
import UseCallback from "../topics/Hooks/usecallbackhook/UseCallback";
import CustomHooks from "../topics/Hooks/customhooks/CustomHooks";

const reactTopics = [

  {
    title: "Fundamentals",
    topics: [
      { path: "", element: <IntroReact />, name: "What is react" },
      { path: "jsx", element: <Jsx/>, name: "JSX" },
      { path: "components", element: <Components/>, name: "Components" },
      { path: "props", element: <Props/>, name: "Props" },
      { path: "event-handling", element: <EventHandling/>, name: "Event Handling" },
      { path: "lists-and-keys", element: <RenderingListsAndKeys/>, name: "Lists and Keys rendering" },
      { path: "conditional-rendering", element:<ConditionalRendering/>, name: "Conditional Rendering" },
      { path: "css-in-react", element:<StylesCss/>, name: "Styling (CSS)" },
      // { path: "props", element: <div>Props Page</div>, name: "Props" },
      // { path: "props", element: <div>Props Page</div>, name: "Props" },
      
    ]
  },
  {
    title: "Hooks",
    topics: [
      { path: "intro-hooks", element: <IntroHooks/>, name: "What is Hooks ? " },
      { path: "usestate-hook", element: <UseState/>, name: "useState Hook" },
      { path: "useeffect-hook", element: <UseEffect/>, name: "useEffect Hook" },
      { path: "useref-hook", element: <UseRef/>, name: "useRef hook" },
      { path: "usecontext-hook", element: <UseContext/>, name: " useContext Hook" },
      { path: "usereducer-hook", element: <UseReducer/>, name: "useReducer Hook" },
      { path: "usememo-hook", element:<UseMemo/>, name: " useMemo Hook" },
      { path: "usecallback-hook", element:<UseCallback/>, name: "useCallback hook" },
      { path: "custom-hook", element:<CustomHooks/>, name: "custom Hook" },
     
      
    ]
  },
 
];

export default reactTopics;
