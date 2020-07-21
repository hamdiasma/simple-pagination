import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Loading from './components/Loading';
const App = () => {
  const [posts, setPosts] = useState([]);
  const [isloding, setIsLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const fetchPots = async () => {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
        const result = response.data;
        setPosts(result);
        setIsLoading(false);
      };
      fetchPots();
    }, 1000);
  }, []);

  // get current posts

  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);
  return (
    <div className="container mt-4">
      <h1 className="text-center">List Of Posts</h1>
      {isloding ? <Loading /> : <Posts posts={currentPosts} />}
      <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} />
    </div>
  );
};

export default App;
