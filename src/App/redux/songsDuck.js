//import { createSelector } from "reselect";

const GET_SONGS = "GET_SONGS";
const GET_SONGS_SUCCESS = "GET_SONGS_SUCCESS";

export function getSongs() {
  return (dispatch, getState) => {
    const { songs } = getState().songs;
    if (songs.length > 0) return; // Already in the store

    dispatch({ type: GET_SONGS });
    return fetch("/songs")
      .then(res => res.json())
      .then(songs => dispatch(getSongsSuccess(songs)))
      .catch(e => console.error("Error accediendo al servidor", e));
  };
}
export function getSongsSuccess(payload) {
  return { type: GET_SONGS_SUCCESS, payload };
}

const songsInitialState = {
  songs: [],
  loading: false
};

const songs = (state = songsInitialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return { ...state, loading: true };
    case GET_SONGS_SUCCESS:
      const songs = action.payload;
      return { ...state, songs, loading: false };
    default:
      return state;
  }
};

export function getSongsByAlbumId(state, albumId) {
  const { songs } = state.songs;
  const id = parseInt(albumId);
  const filteredSongs = songs.filter(s => s.album_id === id);
  return filteredSongs;
}

export function getSongById(state, id) {
  const { songs } = state.songs;
  const idParsed = parseInt(id);
  const song = songs.find(s => s.id === idParsed);
  return song || {};
}

export default songs;
