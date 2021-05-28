import { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { BlogProvider, useBlog } from '../Context';
import { getCurrentData, getDataComments, postDataComment } from '../api/api';
import Comments from "../components/CurrentPage/Comments";
import HeaderContainer from "../components/Header/HeaderContainer";
import FormComment from '../components/CurrentPage/FormComment';

const PostPage = ({
  match: {
    params: { id }
  }
}) => {
  const { pathPosts, pathUsers } = useBlog();

  const [currentPost, setCurrentPost] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [comments, setComments] = useState([]); 

  useEffect(() => {
    getCurrentData(pathPosts, id).then(data => setCurrentPost(data));
  }, [pathPosts, id]);

  useEffect(() => {
    getCurrentData(pathUsers, currentPost.userId).then(data => setCurrentUser(data));
  }, [pathUsers, currentPost.userId]);

  useEffect(() => {
    getDataComments(pathPosts, id).then(data => setComments(data.comments));
  }, [pathPosts, id]);

  return (
    <BlogProvider>
      <main className="uk-main">
        <HeaderContainer />
        <div className="uk-section">
          <div className="uk-container">
            <Link
              to='/'
              style={{color: '#333', fontSize: '1rem', fontWeight: '600'}}
            >
              <i class="fa fa-home"></i>
              <span> Home</span>
            </Link>
            <h1 className="uk-heading-bullet uk-margin-medium-bottom">
              <span>{currentPost.title}</span>
              <a className="uk-text-small" href="/"> {currentUser.username}</a>
            </h1>
            <div className="uk-article uk-dropcap uk-margin-large-bottom">
              <p>{currentPost.body}{currentPost.body}</p>
            </div>
            <hr />
            <h3 className="uk-margin-remove-top">Comments:</h3>
            {comments.map(comment => (
              <Comments key={comment.id} comment={comment} />
            ))}
            <FormComment
              postId={Number(id)}
              postDataComment={postDataComment}
            />
            
          </div>
        </div>
      </main>
    </BlogProvider>
  )
}

export default withRouter(PostPage);