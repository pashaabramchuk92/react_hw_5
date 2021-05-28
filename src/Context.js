import { createContext, useContext, useState } from 'react';

import { getLikeData } from './api/api';
const Context = createContext(null);

const BlogProvider = ({ children }) => {
  const pathPosts = 'posts';
  const pathUsers = 'users';
  const pathAlbums = 'albums';

  const [postsPage, setPostsPage] = useState(true);
  const [likedPosts, setLikedPosts] = useState([]);
  const [likedAlbums, setLikedAlbums] = useState([]);
  
  const setLikePost = async (path, id, like) => {
    await fetch(`${process.env.REACT_APP_API_URL}/${path}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        like: like
      })
    });

    getLikeData(path)
      .then(data => {setLikedPosts(data); console.log(data)});
  }

  const setLikeAlbum = async (path, id, like) => {
    await fetch(`${process.env.REACT_APP_API_URL}/${path}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        like: like
      })
    });

    getLikeData(path)
      .then(data => setLikedAlbums(data));
  }

  const contextValue = {
    pathPosts,
    pathUsers,
    pathAlbums,
    likedPosts,
    postsPage,
    likedAlbums,
    setLikedAlbums,
    setLikePost,
    setLikedPosts,
    setPostsPage,
    setLikeAlbum
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

const useBlog = () => useContext(Context);

export { Context, BlogProvider, useBlog }
