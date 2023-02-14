import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import { normalFetch } from "./utils/fetch";
import { VIEWS_FOOD_RECIPE } from "./utils/constants";

export const RecipeViewTeaser = () => {
  const [allRecipeViewTeasers, setAllRecipeViewTeaser] = useState([]);

  useEffect(() => {
    const url = VIEWS_FOOD_RECIPE;

    normalFetch(url).then((res) => {
      console.log("allRecipeViewTeasers", res);
      setAllRecipeViewTeaser(res);
    });

    console.log("RecipeViewTeaser is loading");
  }, []);

  return (
    <div>
      <h1>RecipeViewTeaser</h1>
      {allRecipeViewTeasers.map((recipe) => (
        <div>
          <h2>{recipe.attributes.title}</h2>
          <a
            href={`https://react-tutorials-2.ddev.site/node/${recipe.attributes.drupal_internal__nid}`}
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(
  <RecipeViewTeaser />,
  document.getElementById("recipe-view-teaser")
);
