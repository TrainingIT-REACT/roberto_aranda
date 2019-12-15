import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSuggestions, selectSuggestions } from "./redux/home";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex"
  },
  card: {
    maxWidth: 345,
    margin: 10,
    flex: 1
  },
  media: {
    height: 140
  }
});

const AlbumCard = ({ id, name, artist, cover, onClickAlbum }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClickAlbum.bind(null, id)}>
        <CardMedia className={classes.media} image={cover} title={"Portada"} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const SongCard = ({ id, name, albumName, albumCover, onClickSong }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClickSong.bind(null, id)}>
        <CardMedia
          className={classes.media}
          image={albumCover}
          title={"Portada"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {albumName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Home = ({
  albumsSuggestions,
  songsSuggestions,
  getSuggestions,
  history
}) => {
  const classes = useStyles();
  useEffect(() => getSuggestions(), [getSuggestions]);
  const handleGoToAlbum = id => history.push("/albums/" + id);
  const handleGoToSong = id => history.push("/reproductor/" + id);
  return (
    <div className={classes.container}>
      <Typography variant="h3">Álbumes</Typography>
      <div className={classes.cardContainer}>
        {albumsSuggestions.map((album, i) => (
          <AlbumCard {...album} key={i} onClickAlbum={handleGoToAlbum} />
        ))}
      </div>
      <Typography variant="h3">Canciones</Typography>
      <div className={classes.cardContainer}>
        {songsSuggestions.map(song => (
          <SongCard {...song} onClickSong={handleGoToSong} />
        ))}
      </div>
    </div>
  );
};

const mapState = selectSuggestions;
const mapDispatch = { getSuggestions };

export default withRouter(connect(mapState, mapDispatch)(Home));
