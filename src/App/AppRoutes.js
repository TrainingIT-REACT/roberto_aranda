import React from "react";
import { Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Home = props => {
  return <Typography variant="h2">Soy el componente {props.name}</Typography>;
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/albums">
        <Home name="albums" />
      </Route>
      <Route exact path="/album">
        <Home name="album" />
      </Route>
      <Route exact path="/reproductor">
        <Home name="reproductor" />
      </Route>
      <Route path="/sesion">
        <Home name="Inicio de sesión" />
      </Route>
      <Route path="/usuario">
        <Home name="Perfil de usuario" />
      </Route>
      <Route exact path="/">
        <Home name="home" />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
