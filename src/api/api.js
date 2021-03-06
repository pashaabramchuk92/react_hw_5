const getData = async (path, page, limit, order, query) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}?_page=${page}&_limit=${limit}&_sort=title&_order=${order}&title_like=${query}`);
  return await res.json();
}

const getTotalCount = async (path, page) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}?_page=${page}`);
  return res.headers.get('x-Total-Count');
}

const getMoreData = async (path, end, order) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}?_start=0&_end=${end}&_sort=title&_order=${order}`);
  return await res.json();
}

const getLikeData = async (path) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}?like_like=true`);
  return await res.json();
}

const getCurrentData = async (path, id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}/${id}`);
  return await res.json();
}

const getDataComments = async (path, id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}/${id}?_embed=comments`);
  return await res.json();
}

const postDataComment = async (path, id, data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}/${id}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}

export {
  getData,
  getTotalCount,
  getMoreData,
  getLikeData,
  getCurrentData,
  getDataComments,
  postDataComment,
}