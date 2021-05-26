import React, { useEffect, useState } from "react";
import { useBlog } from "../../Context";

const LikePost = ({ like, id }) => {

  const { pathPost, setLikeData, setContextLike } = useBlog();

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if(like) {
      setIsLike(true);
      setContextLike(true);
    }
  }, [like, setContextLike]);

  const handleClick = (e) => {
    e.preventDefault();

    setLikeData(pathPost, id, !isLike)
      .then(post => {
        setContextLike(post.like);
        setIsLike(true);
        setContextLike(true);
    
        if(isLike) {
          setContextLike(post.like);
          setIsLike(false);
          setContextLike(false);
        }
      });
  }

  return (
    <a
      href="/"
      className="uk-icon-link"
      uk-icon="heart"
      style={{color: isLike ? 'red' : ''}}
      onClick={(e) => handleClick(e)}
    > </a>
  )
}

export default React.memo(LikePost);