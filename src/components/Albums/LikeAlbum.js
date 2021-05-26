import React, { useEffect, useState } from "react";
import { useBlog } from "../../Context";

const LikePost = ({ like, id }) => {

  const { pathAlbums, setLikeData, setContextLike } = useBlog();

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if(like) {
      setIsLike(true);
      setContextLike(true);
    }
  }, [like, setContextLike]);

  const handleClick = (e) => {
    e.preventDefault();

    setLikeData(pathAlbums, id, !isLike)
      .then(album => {
        setContextLike(album.like);
        setIsLike(true);
        setContextLike(true);
    
        if(isLike) {
          setContextLike(album.like);
          setIsLike(false);
          setContextLike(false);
        }
      });
  }

  return (
    <a
      href="/"
      uk-icon="icon: heart; ratio: 2"
      style={{color: isLike ? 'red' : ''}}
      onClick={(e) => handleClick(e)}
    > </a>
  )
}

export default React.memo(LikePost);