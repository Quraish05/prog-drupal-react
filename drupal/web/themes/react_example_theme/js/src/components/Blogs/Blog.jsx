import React, { useEffect, useState } from "react";
import { normalFetch } from "../../utils/fetch";

export default function Blog() {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const API_ROOT = "/jsonapi/";

    const url = `${API_ROOT}node/blog?include=field_blog_paragraph&jsonapi_include=1`;

    console.log("url", url);
    normalFetch(url).then((res) => {
      console.log("Blog res", res);
      setAllBlogs(res);
    });
  }, []);
  return <div>Blog</div>;
}
