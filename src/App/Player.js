import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSongs, getSongById } from './redux/songsDuck';
import { playedSong } from './redux/userDuck';
import { Typography } from '@material-ui/core';

const Player = ({ name, audio, getSongs, match, playedSong }) => {
  useEffect(() => {
    getSongs();
  }, [getSongs, match.params.id]);
  useEffect(() => {
    playedSong(name);
  });
  return (
    <div>
      <Typography variant="h1">{name}</Typography>
      <Typography variant="subtitle1">El fichero es {audio}</Typography>
      <audio controls autoPlay src={audio}></audio>
    </div>
  );
};

const mapState = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return getSongById(state, id);
};

const mapDispatch = { getSongs, playedSong };

export default withRouter(connect(mapState, mapDispatch)(Player));
