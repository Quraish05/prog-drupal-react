import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { API_ROOT, BASE_URL } from "../utils/constants";
import { fetchPromise } from "../utils/fetch";

import Loader from "../components/Loader";
import LoaderProvider, {
  useLoader,
  useLoaderUpdate,
} from "../context/LoaderContext";

export default function Footer() {
  return (
    <LoaderProvider>
      <FooterComponent />
    </LoaderProvider>
  );
}

function FooterComponent() {
  const [quickLinks, setQuickLinks] = useState([]);
  const isLoading = useLoader();
  const toggleLoader = useLoaderUpdate();

  useEffect(() => {
    fetchPromise(`${BASE_URL}/${API_ROOT}menu_items/quick-links`).then(
      (response) => {
        toggleLoader(true);
        if (response && response.data) {
          console.log("response.data", response.data);

          setQuickLinks(response.data);

          response.data.map((r) => console.log(r.attributes.title));
          toggleLoader(false);
        }
      }
    );
    console.log("Footer running");
    console.log("Footer running");

    return () => setQuickLinks([]);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <p>This is footer</p>

      {quickLinks?.map((ql) => (
        <a href={ql.attributes.url}>{ql.attributes.title}</a>
      ))}
    </div>
  );
}

ReactDOM.render(<Footer />, document.getElementById("site-react-footer"));
