import { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';

import { getData, getTotalCount, getMoreData } from "../api/api";
import AlbumsGrid from "../components/Albums/AlbumsGrid";
import LoadMore from "../components/Footer/LoadMore";
import Pagination from "../components/Footer/Pagination";
import HeaderContainer from "../components/Header/HeaderContainer";
import NavBar from "../components/NavBar/NavBar";
import { useBlog } from "../Context";
import useDebounce from "../hooks/useDebounce";

const Albums = () => {
  const { pathAlbums } = useBlog();

  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [order, setOrder] = useState('asc');
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [next, setNext] = useState(0);
  const [isLoading, setIsLoding] = useState(false);

  const debouncedValue = useDebounce(query, 500);

  useEffect(() => {
    getData(pathAlbums, page, limit, order, debouncedValue)
      .then(data => setAlbums(data));
    setIsSearching(false);
  }, [pathAlbums, page, limit, order, debouncedValue]);

  useEffect(() => {
    getTotalCount(pathAlbums, page)
      .then(total => setTotal(total));
  }, [pathAlbums, page]);

  useEffect(() => {
    getMoreData(pathAlbums, next + limit, order)
      .then(data => {
        setAlbums(data);
        setIsLoding(false);
      });
  }, [pathAlbums, next, limit, order]);

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
          setIsSearching={setIsSearching}
          setQuery={setQuery}
          setOrder={setOrder}
          setLimit={setLimit}
        />
        <AlbumsGrid albums={albums} />
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
  )
}

export default withRouter(Albums);