import SearchBar from './SearchBar';
import SortPosts from './SortPosts';
import ShowPosts from './ShowPosts';
import ChangeView from './ChangeView';
import { useBlog } from '../../Context';

const NavBar = ({
  isSearching,
  viewGrid,
  viewList,
  setIsSearching,
  setQuery,
  setOrder,
  setLimit,
  setViewGrid,
  setViewList,
}) => {
  const { postsPage } = useBlog();
  
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <SearchBar
        setIsSearching={setIsSearching}
        isSearching={isSearching}
        setQuery={setQuery}
      />
      <SortPosts setOrder={setOrder} />
      <ShowPosts setLimit={setLimit} />
      {postsPage &&
        <ChangeView
          viewGrid={viewGrid}
          viewList={viewList}
          setViewGrid={setViewGrid}
          setViewList={setViewList}
        />
      }
    </div>
  )
}

export default NavBar;