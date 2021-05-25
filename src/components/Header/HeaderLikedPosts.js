import { useBlog } from "../../Context";

const HeaderLikedPosts = ({ posts }) => {

  const { pathPost, contextLike, setLikeData, setContextLike } = useBlog();

  return (
    <table className="uk-table uk-table-divider uk-table-justify">
      <thead>
        <tr>
          <th>Title</th>
          <th className="uk-text-right">Delete</th>
        </tr>
      </thead>
      <tbody>
        {posts?.map(post => (
          <tr key={post.id}>
            <td>
              {
                post.title.length > 45
                ? `${post.title.slice(0, 45).trim()}...`
                : post.title
              }
            </td>
            <td className="uk-text-right">
              <button
                className="uk-button uk-icon"
                type="button"
                uk-icon="icon: close;"
                onClick={() => {
                  setLikeData(pathPost, post.id, contextLike)
                    .then(x => {
                      setContextLike(!x.like);
                    })
                }}
              >
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default HeaderLikedPosts;