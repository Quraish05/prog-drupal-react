import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { normalFetch, fetchPromise } from "../utils/fetch";
import { GET_FOOD_RECIPE } from "../utils/constants";

import Loader from "../components/Loader";
import LoaderProvider, {
  useLoader,
  useLoaderUpdate,
} from "../context/LoaderContext";

export default function RecipeFull() {
  const [thisRecipe, setThisRecipe] = useState({});

  const isLoading = useLoader();
  const toggleLoader = useLoaderUpdate();

  let nodeID = window.location.pathname.match(/[0-9]+(?!.*[0-9]+)/);

  useEffect(() => {
    if (nodeID && nodeID.length == 1) {
      toggleLoader(true);

      fetchPromise(
        `${GET_FOOD_RECIPE}?filter[drupal_internal__nid]=${nodeID}&include=field_food_title_and_image.field_image,field_cuisine_type&jsonapi_include=1`
      ).then((d) => {
        console.log("d", d);
        if (d && d.data && d.data[0]) {
          setThisRecipe(d.data[0]);
          toggleLoader(false);
        }
      });
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <LoaderProvider>
        <>
          <div>
            <h4>{thisRecipe.field_recipe_subtitle?.value}</h4>
            <div>
              {thisRecipe.field_cuisine_type?.map((c) => (
                <p key={c.id}>{c.name}</p>
              ))}
            </div>
            {thisRecipe.field_food_title_and_image?.[0].field_image ? (
              <img
                src={
                  thisRecipe.field_food_title_and_image[0].field_image
                    .image_style_uri.medium
                }
              />
            ) : (
              ""
            )}
          </div>
        </>
      </LoaderProvider>
    </>
  );
}

// ReactDOM.render(<RecipeFull />, document.getElementById("recipe-full"));
