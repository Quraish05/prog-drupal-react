import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

/* Import Components */

const Main = hot(() => <>Index.js</>);

ReactDOM.render(<Main />, document.getElementById("react-app"));
