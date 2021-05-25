import HeaderLikedPosts from "./HeaderLikedPosts"
import HeaderTabs from "./HeaderTabs"
import { useBlog } from "../../Context";

const HeaderContainer = () => {

  const { likedPosts } = useBlog();

  return (
    <nav className="uk-navbar uk-navbar-container">
      <HeaderTabs />
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className="uk-button uk-icon"
            type="button"
            uk-icon="icon: heart; ratio: 2"
            aria-expanded="false"
          >
          </button>
          <div className="uk-width-large uk-dropdown" uk-dropdown="mode: click">
            <div className="uk-dropdown-grid uk-child-width-1-1@m uk-grid" uk-grid="">
              <div>
                <HeaderLikedPosts posts={likedPosts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderContainer;