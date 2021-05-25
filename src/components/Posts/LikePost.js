import { useEffect, useState } from "react";
import { useBlog } from "../../Context";

const LikePost = ({ like, id }) => {

  const { pathPost, contextLike, setLikeData, setContextLike } = useBlog();

  const [isLike, setIsLike] = useState(contextLike);

  useEffect(() => {
    if(like) {
      setIsLike(true);
    }
  }, [like]);
  
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
      style={{color: isLike ? 'blue' : ''}}
      onClick={(e) => handleClick(e)}
    > </a>
  )
}

export default LikePost;