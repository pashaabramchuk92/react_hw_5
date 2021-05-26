import { createContext, useContext, useEffect, useState } from 'react';

import { setLikeData, getLikeData } from './api/api';

const Context = createContext(null);

const BlogProvider = ({ children }) => {
  const pathPost = 'posts';
  const pathUsers = 'users';
  const pathAlbums = 'albums';

  const [postsPage, setPostsPage] = useState(true);
  const [contextLike, setContextLike] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [likedAlbums, setLikedAlbums] = useState([]);

  useEffect(() => {
    getLikeData(pathPost)
      .then(data => setLikedPosts(data));
    setContextLike(true ? false : true);
  }, [pathPost, contextLike]);

  useEffect(() => {
    getLikeData(pathAlbums)
      .then(data => setLikedAlbums(data));
    setContextLike(true ? false : true);
  }, [pathAlbums, contextLike]);

  const contextValue = {
    pathPost,
    pathUsers,
    pathAlbums,
    likedPosts,
    contextLike,
    postsPage,
    likedAlbums,
    setLikedAlbums,
    setLikeData,
    setContextLike,
    getLikeData,
    setLikedPosts,
    setPostsPage
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

const useBlog = () => useContext(Context);

export { Context, BlogProvider, useBlog }
