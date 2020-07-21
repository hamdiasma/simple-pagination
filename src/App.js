import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPots = async () => {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      const result = response.data;
      setPosts(result);
    };
    fetchPots();
  }, []);
  return (
    <div className="container mt-4">
      <h1 className="text-center">List Of Posts</h1>
      <Posts posts={posts}/>
    </div>
  );
};

export default App;
