import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSongs, getSongById } from "./redux/songsDuck";
import { Typography } from "@material-ui/core";

const Player = ({ name, audio, getSongs, match }) => {
  useEffect(() => {
    getSongs();
  }, [getSongs, match.params.id]);
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

const mapDispatch = { getSongs };

export default withRouter(connect(mapState, mapDispatch)(Player));
