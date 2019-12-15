const LOGIN = 'LOGIN';
const SONG_PLAYED = 'SONG_PLAYED';
const ALBUM_VIEWED = 'ALBUM_VIEWED';

export function login(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export function playedSong(payload) {
  return {
    type: SONG_PLAYED,
    payload
  };
}
export function viewedAlbum(payload) {
  return {
    type: ALBUM_VIEWED,
    payload
  };
}

const initialState = {
  name: '',
  password: '',
  playedSongs: [],
  viewedAlbums: []
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...payload
      };
    case SONG_PLAYED:
      return {
        ...state,
        playedSongs: [...state.playedSongs, payload]
      };
    case ALBUM_VIEWED:
      return {
        ...state,
        viewedAlbums: [...state.viewedAlbums, payload]
      };
    default:
      return state;
  }
};
