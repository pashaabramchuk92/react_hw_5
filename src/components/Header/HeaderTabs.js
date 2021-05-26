import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useBlog } from "../../Context";

const HeaderTabs = () => {
  const { postsPage, setPostsPage } = useBlog();

  const [activeClass, setActiveClass] = useState('');
  
  useEffect(() => {
    if(window.location.pathname === '/' || postsPage) {
      setActiveClass('uk-active');
    }
  }, [postsPage, setActiveClass]);
  
  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className={activeClass} >
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