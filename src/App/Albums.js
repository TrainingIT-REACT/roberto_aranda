import React, { useEffect } from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAlbums } from './redux/albumsDuck';
import { viewedAlbum } from './redux/userDuck';

const styles = () => ({
  coverImg: {
    width: '2rem',
    height: '2rem'
  }
});
const useStyles = makeStyles(styles);

const Albums = ({ albums, getAlbums, viewedAlbum, ...props }) => {
  useEffect(() => {
    getAlbums();
  }, [getAlbums]);
  const classes = useStyles(props);
  const handleSelect = (id, name) => {
    viewedAlbum(name);
    props.history.push('/album/' + id);
  };
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
            <TableRow
              key={a.id}
              onClick={handleSelect.bind(null, a.id, a.name)}
            >
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
  getAlbums,
  viewedAlbum
};

export default withRouter(connect(mapState, mapDispatch)(Albums));
