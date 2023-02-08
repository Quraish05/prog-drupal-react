import React, { useEffect, useState } from "react";
import { normalFetch } from "../../utils/fetch";

export default function Recipe() {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    const API_ROOT = "/jsonapi/";

    const url = `${API_ROOT}node/food_recipes?include=field_cuisine_type&jsonapi_include=1`;

    normalFetch(url).then((res) => {
      console.log("food recipe res", res);
      setAllRecipes(res);
    });
  }, []);

  return (
    <div>
      Recipes
      {allRecipes.map((recipe) => (
        <div>
          <h1>{recipe.title}</h1>
          <h3>{recipe.field_recipe_description}</h3>
          <p>Cuisine type:</p>
          {recipe.field_cuisine_type.map((ct) => (
            <p>{ct.name}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
