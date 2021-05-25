import { createContext, useContext, useEffect, useState } from 'react';

import { setLikeData, getLikeData } from './api/api';

const Context = createContext(null);

const BlogProvider = ({ children }) => {
  const pathPost = 'posts';

  const [contextLike, setContextLike] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    getLikeData(pathPost)
      .then(data => setLikedPosts(data));
    setContextLike(true ? false : true);
  }, [pathPost, contextLike]);

  const contextValue = {
    pathPost,
    likedPosts,
    contextLike,
    setLikeData,
    setContextLike,
    getLikeData,
    setLikedPosts
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

const useBlog = () => useContext(Context);

export { Context, BlogProvider, useBlog }
