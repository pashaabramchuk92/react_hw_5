import React from "react";
import { Link } from "react-router-dom";

import { useBlog } from "../../Context";
import LikeBtn from "../general/LikeBtn";

const PostListItem = ({ post }) => {

  const { likedPosts } = useBlog();

  return (
    <div>
      <div
        className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin uk-grid"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container uk-first-column">
          <img src="https://picsum.photos/600/400" alt="" className="uk-cover" />
          <canvas width="600" height="400"></canvas>
        </div>
        <div className="">
          <div className="uk-card-body">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
              {`${post.title.slice(0, 10).trim()}...`}
              <LikeBtn
                id={post.id}
                isLiked={likedPosts.find(x => x.id === post.id)}
                like={post.like}
              />
              </h3>
            <p>
            {`${post.body.slice(0, 100).trim()}...`}
            </p>
            <Link
              to={`/posts/${post.id}`}
              className="uk-button uk-button-text"
            >Read more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PostListItem);