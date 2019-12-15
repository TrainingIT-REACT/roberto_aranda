import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppRoutes from "./AppRoutes";
import AppDrawer from "./AppDrawer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginTop: theme.mixins.toolbar.minHeight,
    padding: theme.spacing(3)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppDrawer />
          <main className={classes.content}>
            <div className={classes.toolbar}>
              <AppRoutes />
            </div>
          </main>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
