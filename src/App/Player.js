import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSongById } from "./redux/songsDuck";
import { Typography } from "@material-ui/core";

const Player = props => {
  return (
    <div>
      <Typography variant="h1">{props.name}</Typography>
      <Typography variant="subtitle1">El fichero es {props.audio}</Typography>
      <audio controls src={props.audio}></audio>
    </div>
  );
};

const mapState = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return getSongById(state, id);
};

export default withRouter(connect(mapState, null)(Player));
