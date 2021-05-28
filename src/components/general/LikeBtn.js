import React from "react";
import { useBlog } from "../../Context";

const LikeBtn = ({ like, isLiked, id }) => {

  const { pathPosts, pathAlbums, setLikePost, setLikeAlbum } = useBlog();

  const handleClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      setLikePost(pathPosts, id, !isLiked);
    }

    if (window.location.pathname === '/albums') {
      setLikeAlbum(pathAlbums, id, !isLiked);
    }
  }

  return (
    <a
      href="/"
      className="uk-icon-link"
      uk-icon={window.location.pathname === '/albums' ? "icon: heart; ratio: 2" : "heart"}
      style={{color: isLiked ? 'red' : ''}}
      onClick={(e) => handleClick(e)}
    > </a>
  )
}

export default React.memo(LikeBtn);