import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

/* Import Components */
import DrupalProjectStats from "./components/DrupalProjectStats";
import NodeListOnly from "./components/NodeListOnly";
import NodeReadWrite from "./components/NodeReadWrite";
import Recipe from "./components//Recipes/Recipe";
import Blog from "./components/Blogs/Blog";

const Main = hot(() => (
  <>
    {/* <NodeReadWrite />
    <Recipe />
    <Blog /> */}
  </>
));

ReactDOM.render(<Main />, document.getElementById("react-app"));
