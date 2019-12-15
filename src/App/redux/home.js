import { getAlbums } from './albumsDuck';
import { getSongs } from './songsDuck';

const NUM_SUGGESTIONS = 5;

export function getSuggestions() {
  return dispatch => {
    dispatch(getSongs());
    dispatch(getAlbums());
  };
}

export function selectSuggestions(state) {
  const albums = state.albums.albums;
  const songs = state.songs.songs;
  const albumsSuggestions = [];
  const songsSuggestions = [];
  for (let i = 0; i < NUM_SUGGESTIONS; i++) {
    albumsSuggestions.push(pickRandom(albums));
    const song = pickRandom(songs);

    const album = albums.find(a => a.id === song.album_id);
    if (!album) continue;
    song.albumCover = album.cover;
    song.albumName = album.name;
    songsSuggestions.push(song);
  }

  return {
    albumsSuggestions,
    songsSuggestions
  };
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
