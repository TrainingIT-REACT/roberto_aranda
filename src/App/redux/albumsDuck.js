const GET_ALBUMS = "GET_ALBUMS";
const GET_ALBUMS_SUCCESS = "GET_ALBUMS_SUCCESS";

async function fetchData() {
  return fetch("/albums")
    .then(res => res.json())
    .catch(e => console.error("Error accediendo al servidor", e));
}

export function getAlbums() {
  return dispatch => {
    dispatch({ type: GET_ALBUMS });
    fetchData().then(albums => dispatch(getAlbumsSuccess(albums)));
  };
}
export function getAlbumsSuccess(payload) {
  return { type: GET_ALBUMS_SUCCESS, payload };
}

const albumsInitialState = {
  albums: [],
  loading: false
};

const albums = (state = albumsInitialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return { ...state, loading: true };
    case GET_ALBUMS_SUCCESS:
      const albums = action.payload;
      return { ...state, albums, loading: false };
    default:
      return state;
  }
};

export default albums;
