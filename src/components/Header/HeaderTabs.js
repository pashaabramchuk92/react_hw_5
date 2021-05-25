import { Link } from "react-router-dom";

const HeaderTabs = () => {
  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className="uk-active">
          <Link to='/'>Posts</Link>
        </li>
        <li>
          <a href="/" onClick={e => e.preventDefault()}>Albums</a>
        </li>
      </ul>
    </div>
  )
}

export default HeaderTabs;