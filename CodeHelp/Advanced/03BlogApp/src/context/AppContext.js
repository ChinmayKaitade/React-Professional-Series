import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

// step-creating context (context creation)
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const navigate = useNavigate();

  // data filling
  async function fetchBlogPosts(page = 1, tag = null, category) {
    setLoading(true);

    // let url = `${baseUrl}?page=${page}`; (for normal blog only for pages)
    let url = `${baseUrl}?page=${page}`; // (url for getting blog posts)

    // if tag present in url
    if (tag) {
      url += `&tag=${tag}`; // (url for tag)
    }
    if (category) {
      url += `&category=${category}`; // (url for category)
    }

    console.log("Printing the Final URL");
    console.log(url);
    // API call
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in Fetching Data from API");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  // Handle when Next and Previous button are clicked
  function handlePageChange(page) {
    navigate({search: `?page=${page}`})
    setPage(page); // set page number
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  // step2-providing context (context providing)
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
