import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  function HomePagePost(){
      const request = axios.get("http://localhost:4000/posts");
      request.then((res)=>{setPosts(res.data)})
  }

  useEffect(() => {
    HomePagePost()
  }, []);

  return (
    <PostList name="Daily stories" posts={posts} />
  );
}
