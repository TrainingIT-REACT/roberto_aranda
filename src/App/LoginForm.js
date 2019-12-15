import React from 'react';
import { TextField, withStyles, Typography, Button } from '@material-ui/core';
import { login } from './redux/userDuck';
import { connect } from 'react-redux';

const styles = theme => ({
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  title: { margin: '10px 0 20px 0' },
  root: {
    display: 'flex',
    flexDirection: 'column',
    '&> div': {
      margin: 8
    },
    '&> button': {
      marginTop: 8
    }
  }
});

class LoginForm extends React.Component {
  initialState = {
    name: '',
    password: ''
  };
  state = this.initialState;
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography className={classes.title} variant="h3">
          Inicio de sesión
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextField
            type="password"
            label="Contraseña"
            variant="outlined"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button onClick={this.handleSubmit}>Iniciar sesión</Button>
        </form>
      </div>
    );
  }
}

const mapDispatch = { login };

export default connect(null, mapDispatch)(withStyles(styles)(LoginForm));
