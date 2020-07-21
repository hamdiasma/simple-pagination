import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import Loading from "./components/Loading";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [isloding, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const fetchPots = async () => {
        const response = await axios.get(
          "http://jsonplaceholder.typicode.com/posts"
        );
        const result = response.data;
        setPosts(result);
        setIsLoading(false);
      };
      fetchPots();
    }, 2000);
  }, []);
  return (
    <div className="container mt-4">
      <h1 className="text-center">List Of Posts</h1>

      {isloding ? <Loading /> : <Posts posts={posts} />}
      <Pagination />
    </div>
  );
};

export default App;
