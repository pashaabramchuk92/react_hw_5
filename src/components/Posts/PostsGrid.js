import PostsGridItem from "./PostsGridItem";

const PostsGridPage = ({ posts }) => {
  
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {
        posts.length > 0
        ? posts?.map(post => <PostsGridItem key={post.id} post={post} />)
        : <div className="uk-align-center">Sorry, posts not found :(</div>
      }
    </div>
  )
}

export default PostsGridPage;