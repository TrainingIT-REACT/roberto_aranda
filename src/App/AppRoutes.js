import React from "react";
import { Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Albums from "./Albums";
import Album from "./Album";
import Player from "./Player";
import Home from "./Home";

const Home1 = props => {
  return <Typography variant="h2">Soy el componente {props.name}</Typography>;
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/albums">
        <Albums />
      </Route>
      <Route exact path="/album/:id">
        <Album />
      </Route>
      <Route exact path="/reproductor/:id">
        <Player />
      </Route>
      <Route path="/sesion">
        <Home1 name="Inicio de sesión" />
      </Route>
      <Route path="/usuario">
        <Home1 name="Perfil de usuario" />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
