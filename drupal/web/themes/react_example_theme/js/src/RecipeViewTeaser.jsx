import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import { normalFetch } from "./utils/fetch";
import { VIEWS_FOOD_RECIPE } from "./utils/constants";

export default function RecipeViewTeaser() {
  const [allRecipeViewTeasers, setAllRecipeViewTeaser] = useState([]);

  useEffect(() => {
    const url = VIEWS_FOOD_RECIPE;

    normalFetch(url).then((res) => {
      console.log("allRecipeViewTeasers", res);
      setAllRecipeViewTeaser(res);
    });
  }, []);

  return (
    <div>
      {allRecipeViewTeasers.map((recipe) => (
        <div>{recipe.attributes.title}</div>
      ))}
    </div>
  );
}

ReactDOM.render(
  <RecipeViewTeaser />,
  document.getElementById("recipe-view-teaser")
);
