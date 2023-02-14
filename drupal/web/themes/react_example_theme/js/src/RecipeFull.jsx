import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { normalFetch, fetchPromise } from "./utils/fetch";
import { GET_FOOD_RECIPE } from "./utils/constants";

import Loader from "./components/Loader";

export default function RecipeFull() {
  const [thisRecipe, setThisRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let nodeID = window.location.pathname.match(/[0-9]+(?!.*[0-9]+)/);

  useEffect(() => {
    if (nodeID && nodeID.length == 1)
      fetchPromise(
        `${GET_FOOD_RECIPE}?filter[drupal_internal__nid]=${nodeID}&include=field_food_title_and_image.field_image&jsonapi_include=1`
      ).then((d) => {
        console.log("d", d);
        if (d && d.data && d.data[0]) {
          setThisRecipe(d.data[0]);
          setIsLoading(false);
        }
      });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1>RecipeFull</h1>
      <h3>{thisRecipe.field_recipe_subtitle.value}</h3>
      {thisRecipe.field_food_title_and_image[0].field_image ? (
        <img
          src={
            thisRecipe.field_food_title_and_image[0].field_image.image_style_uri
              .medium
          }
        />
      ) : (
        ""
      )}
    </div>
  );
}

ReactDOM.render(<RecipeFull />, document.getElementById("recipe-full"));
