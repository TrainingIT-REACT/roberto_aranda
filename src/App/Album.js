import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { IconButton, Typography } from "@material-ui/core";
import PlayIcon from "@material-ui/icons/PlayCircleFilledOutlined";

const Album = props => {
  const [album, setAlbum] = useState({});
  useEffect(() => {
    const songId = props.match.params.id;
    async function fetchData() {
      try {
        const res = await fetch("/songs/" + songId);
        const json = await res.json();
        setAlbum(json);
      } catch (e) {
        console.error("Error accediendo al servidor", e);
      }
    }
    fetchData();
  }, [props.match.params.id]);
  const playSong = song => console.log("playing", song);
  return (
    <div>
      <Typography variant="h1">{album.name}</Typography>
      <Typography variant="subtitle1">{album.audio}</Typography>
      <Typography variant="caption">{album.seconds} segundos</Typography>
      <IconButton
        onClick={() => {
          playSong(album.audio);
        }}
      >
        <PlayIcon />
      </IconButton>
      <audio src={album.audio}></audio>
    </div>
  );
};

export default withRouter(Album);
