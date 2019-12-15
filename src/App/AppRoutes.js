import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Albums from './Albums';
import Album from './Album';
import Player from './Player';
import Home from './Home';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

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
        <LoginForm />
      </Route>
      <Route path="/usuario">
        <UserProfile />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
