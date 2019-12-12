import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AppRoutes from "./AppRoutes";
import AppDrawer from "./AppDrawer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
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
      <div className={classes.root}>
        <CssBaseline />
        <AppDrawer />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <AppRoutes />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
