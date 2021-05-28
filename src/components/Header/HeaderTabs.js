import { Link } from "react-router-dom";
import { useBlog } from "../../Context";

const HeaderTabs = () => {

  const { postsPage, setPostsPage } = useBlog();

  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className={window.location.pathname === '/' || postsPage ? 'uk-active' : ''} >
          <Link
            to='/'
            onClick={() => {
              setPostsPage(true);
            }}
          >Posts</Link>
        </li>
        <li className={window.location.pathname === '/albums' ? 'uk-active' : ''} >
          <Link
            to='/albums'
            onClick={() => {
              setPostsPage(false);
            }}
          >Albums</Link>
        </li>
      </ul>
    </div>
  )
}

export default HeaderTabs;