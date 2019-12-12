import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import RadioIcon from "@material-ui/icons/Radio";
import PersonIcon from "@material-ui/icons/Person";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    },
    "& a": {
      textDecoration: "none",
      color: theme.palette.grey[500]
    },
    "& .activeItem": {
      color: theme.palette.grey[900]
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% )`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    marginTop: theme.mixins.toolbar.minHeight,
    padding: theme.spacing(3)
  }
}));

const ResponsiveDrawer = props => {
  const { container } = props;
  const classes = useStyles();

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <NavLink to="/" activeClassName="activeItem">
          <ListItem button key={"Inicio"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>
        </NavLink>
        <NavLink to="/albums" activeClassName="activeItem">
          <ListItem button key={"Álbums"}>
            <ListItemIcon>
              <QueueMusicIcon />
            </ListItemIcon>
            <ListItemText primary={"Álbums"} />
          </ListItem>
        </NavLink>
        <NavLink to="/reproductor" activeClassName="activeItem">
          <ListItem button key={"Reproductor"}>
            <ListItemIcon>
              <RadioIcon />
            </ListItemIcon>
            <ListItemText primary={"Reproductor"} />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <NavLink to="/sesion" activeClassName="activeItem">
          <ListItem button key="Inicio de sesión">
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio de sesión"} />
          </ListItem>
        </NavLink>
        <NavLink to="/usuario" activeClassName="activeItem">
          <ListItem button key="Perfil de usuario">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil de usuario" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Reactify
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};

export default ResponsiveDrawer;
