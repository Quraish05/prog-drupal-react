import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import LoaderProvider, {
  useLoader,
  useLoaderUpdate,
} from "../context/LoaderContext";
import RecipeFull from "./RecipeFull";

export default function Recipe() {
  const loader = useLoader();
  const updateLoader = useLoaderUpdate();

  return (
    <LoaderProvider>
      <RecipeFull />
    </LoaderProvider>
  );
}

ReactDOM.render(<Recipe />, document.getElementById("recipe-full"));
