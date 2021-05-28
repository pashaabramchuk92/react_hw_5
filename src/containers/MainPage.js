import { useState, useEffect } from 'react';

import useDebounce from '../hooks/useDebounce';
import { getData, getTotalCount, getMoreData, } from "../api/api";

import PostsGrid from '../components/Posts/PostsGrid';
import PostsList from '../components/Posts/PostsList';
import NavBar from '../components/NavBar/NavBar';
import HeaderContainer from '../components/Header/HeaderContainer';
import LoadMore from '../components/Footer/LoadMore';
import Pagination from '../components/Footer/Pagination';
import { useBlog } from '../Context';

const MainPage = () => {
  const { pathPosts } = useBlog();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [order, setOrder] = useState('asc');
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [viewGrid, setViewGrid] = useState(true);
  const [viewList, setViewList] = useState(false);
  const [next, setNext] = useState(0);
  const [isLoading, setIsLoding] = useState(false);

  const debouncedValue = useDebounce(query, 500);
  
  useEffect(() => {
    getData(pathPosts, page, limit, order, debouncedValue)
      .then(data => setPosts(data));
    setIsSearching(false);
  }, [pathPosts, page, limit, order, debouncedValue]);

  useEffect(() => {
    getTotalCount(pathPosts, page)
      .then(total => setTotal(total));
  }, [pathPosts, page]);

  useEffect(() => {
    getMoreData(pathPosts, next + limit, order)
      .then(data => {
        setPosts(data);
        setIsLoding(false);
      });
  }, [pathPosts, next, limit, order]);

  const handleLoadMore = () => {
    setQuery('');
    setNext(next + Number(limit));
  }

  return (
    <div className="uk-main">
      <HeaderContainer />
      <div className="uk-section">
        <div className="uk-container">
          <NavBar
            isSearching={isSearching}
            viewGrid={viewGrid}
            viewList={viewList}
            setIsSearching={setIsSearching}
            setQuery={setQuery}
            setOrder={setOrder}
            setLimit={setLimit}
            setViewGrid={setViewGrid}
            setViewList={setViewList}
          />
          {
            viewGrid
            ? <PostsGrid posts={posts} />
            : <PostsList posts={posts} />
          }
          <LoadMore
            handleLoadMore={handleLoadMore}
            isLoading={isLoading}
            setIsLoding={setIsLoding}
          />
          <Pagination
            total={total}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;