import React from 'react';
import { connect } from 'react-redux';
import { Typography, makeStyles } from '@material-ui/core';

const styles = () => ({
  labelTitle: {
    margin: 16
  }
});
const useStyles = makeStyles(styles);

function UserProfile({ name, playedSongs, viewedAlbums, ...props }) {
  const classes = useStyles(props);
  const UserComponent = Boolean(name) ? (
    <div>
      <Typography variant="h2">{name}</Typography>
      <br />
      <Typography className={classes.labelTitle} variant="h4">
        Canciones recientes
      </Typography>
      {playedSongs.map((s, i) => (
        <Typography key={i} variant="h6">
          {s}
        </Typography>
      ))}
      <br />
      <Typography className={classes.labelTitle} variant="h4">
        Álbumes vistos
      </Typography>
      {viewedAlbums.map((a, i) => (
        <Typography key={i} variant="h6">
          {a}
        </Typography>
      ))}
    </div>
  ) : (
    <Typography variant="h4">Usuario no registrado</Typography>
  );
  return UserComponent;
}

const mapState = state => {
  const { name, playedSongs, viewedAlbums } = state.user;
  return {
    name,
    playedSongs,
    viewedAlbums
  };
};

export default connect(mapState, null)(UserProfile);
