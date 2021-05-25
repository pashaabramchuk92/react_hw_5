const getData = async (path, page, limit, order, query) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}?_page=${page}&_limit=${limit}&_sort=id&_order=${order}&title_like=${query}`);
  return await res.json();
}

const getTotalCount = async (path, page) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}?_page=${page}`);
  return res.headers.get('x-Total-Count');
}

const getMoreData = async (path, end, order) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}?_start=0&_end=${end}&_sort=id&_order=${order}`);
  return await res.json();
}

const getLikeData = async (path) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}?like_like=true`);
  return await res.json();
}
const setLikeData = async (path, id, like) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      like: like
    })
  });
  return await res.json();
}

export {
  getData,
  getTotalCount,
  getMoreData,
  getLikeData,
  setLikeData,
}