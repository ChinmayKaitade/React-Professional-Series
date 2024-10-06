import React, { useContext, useEffect } from "react";

import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      // if param(url) ke path me agar `tags` present hai toh hume tag wala page show karna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " "); // splits url and replace `-` with `" "`
      fetchBlogPosts(Number(page), tag);
    }
    // if tag is not present and category is present
    else if (location.pathname.includes("category")) {
      const category = location.pathname.split("/".at(-1).replaceAll("-", " ")); // splits url and replace `-` with `" "`
      fetchBlogPosts(Number(page), null, category);
    }
    // if tag and category both not present
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
};

export default App;
