import { useState } from "react";
import { useBlog } from "../../Context";

const FormComment = ({ postId, postDataComment }) => {
  const { pathPost } = useBlog();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [commentText, setCommentText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const comment = {
      postId,
      name: userName,
      email: userEmail,
      body: commentText
    }

    postDataComment(pathPost, postId, comment);
    //в БД приходит строка для id поста... ????
    e.target.reset();
  }

  return (
    <form
      action="#"
      className="uk-comment-form uk-margin-medium-top"
      onSubmit={(e) => submitHandler(e)}
    >
      <fieldset className="uk-fieldset">
          <legend className="uk-legend">Add Comment</legend>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="text"
              placeholder="Name"
              required
              onInput={e => setUserName(e.target.value)}
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="email"
              placeholder="Email"
              required
              onInput={e => setUserEmail(e.target.value)}
            />
          </div>
          <div className="uk-margin">
            <textarea
              className="uk-textarea"
              rows="5"
              placeholder="Comment"
              required
              onInput={e => setCommentText(e.target.value)}
            ></textarea>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-primary" type="submit">
              Post Comment
            </button>
          </div>
      </fieldset>
    </form>
  )
}

export default FormComment;