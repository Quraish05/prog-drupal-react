import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import LoaderProvider, {
  useLoader,
  useLoaderUpdate,
} from "./context/LoaderContext";
import RecipeFull from "./Recipe/RecipeFull";

/* Import Components */
/* const Main = hot(() => <div>
</div>); */

export default function Main() {
  const loader = useLoader();
  const updateLoader = useLoaderUpdate();

  return (
    <LoaderProvider>
      {/* <RecipeFull /> */}
      <div>Index</div>
    </LoaderProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById("react-app"));
