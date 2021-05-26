import React from "react";
import { Link } from "react-router-dom";

import LikePost from "./LikePost";

const PostsGridItem = ({ post }) => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {`${post.title.slice(0, 10).trim()}...`}
            <LikePost like={post.like} id={post.id} />
          </h3>
        </div>
        <div className="uk-card-body">
         {`${post.body.slice(0, 100).trim()}...`}
        </div>
        <div className="uk-card-footer">
          <Link
            to={`/posts/${post.id}`}
            className="uk-button uk-button-text"
          >Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PostsGridItem);