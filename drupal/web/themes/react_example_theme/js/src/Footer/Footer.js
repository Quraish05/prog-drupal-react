import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { API_ROOT, BASE_URL } from "../utils/constants";
import { fetchPromise } from "../utils/fetch";

export default function Footer() {
  const [quickLinks, setQuickLinks] = useState();
  useEffect(() => {
    fetchPromise(`${BASE_URL}/${API_ROOT}menu_items/quick-links`).then(
      (res) => {
        console.log("res", res);
        if (res && res.data) {
          setQuickLinks(res.data);
        }
      }
    );
    console.log("Footer runniung");
  }, []);

  return <div>Footer</div>;
}

ReactDOM.render(<Footer />, document.getElementById("site-react-footer"));
