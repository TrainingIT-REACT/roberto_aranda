import React, { useEffect } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAlbums } from "./redux/albumsDuck";

const styles = () => ({
  coverImg: {
    width: "2rem",
    height: "2rem"
  }
});
const useStyles = makeStyles(styles);

const Albums = ({ albums, getAlbums, ...props }) => {
  useEffect(() => {
    getAlbums();
  }, [getAlbums]);
  const classes = useStyles(props);
  const handleSelect = id => props.history.push("/album/" + id);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Artista</TableCell>
            <TableCell>Portada</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums.map((a, i) => (
            <TableRow key={a.id} onClick={handleSelect.bind(null, a.id)}>
              <TableCell>{a.name}</TableCell>
              <TableCell>{a.artist}</TableCell>
              <TableCell>
                <img className={classes.coverImg} src={a.cover} alt="cover" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapState = state => {
  const { albums } = state.albums;
  return {
    albums
  };
};

const mapDispatch = {
  getAlbums
};

export default withRouter(connect(mapState, mapDispatch)(Albums));
