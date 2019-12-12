import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  IconButton,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import PlayIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import { connect } from "react-redux";
import { getSongs, getSongsByAlbumId } from "./redux/songsDuck";

const Album = ({ songs, getSongs, match, history }) => {
  useEffect(() => {
    getSongs();
  }, [getSongs, match.params.id]);
  const playSong = songId => history.push("/reproductor/" + songId);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Identificador</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Pista</TableCell>
            <TableCell>Segundos</TableCell>
            <TableCell>Reproducir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((a, i) => (
            <TableRow key={a.id}>
              <TableCell>{a.id}</TableCell>
              <TableCell>{a.name}</TableCell>
              <TableCell>{a.audio}</TableCell>
              <TableCell>{a.seconds}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => {
                    playSong(a.id);
                  }}
                >
                  <PlayIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapState = (state, ownProps) => {
  const albumId = ownProps.match.params.id;
  return { songs: getSongsByAlbumId(state, albumId) };
};

const mapDispatch = { getSongs };

export default withRouter(connect(mapState, mapDispatch)(Album));
