import React, { useEffect, useState } from "react";
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

const styles = () => ({
  coverImg: {
    width: "2rem",
    height: "2rem"
  }
});
const useStyles = makeStyles(styles);

const Albums = props => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/albums");
        const json = await res.json();
        console.log("er json", json);
        setAlbums(json);
      } catch (e) {
        console.error("Error accediendo al servidor", e);
      }
    }
    fetchData();
  }, []);
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

export default withRouter(Albums);
