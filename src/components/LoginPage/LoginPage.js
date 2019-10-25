import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
// ---- Import Material UI --- //
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import LogoS from '../Media/LogoS.svg'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <Router>
      <div>
        {/* {this.props.errors.loginMessage && (
          <p
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </p>
        )} */}
        <form onSubmit={this.login}>
          <h3>Drink Linkz</h3>
          <img src={LogoS} alt="website-logo"/>
          <div>
          {this.props.errors.loginMessage && (
          <p
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </p>
        )}
              <TextField
                onChange={this.handleInputChangeFor('username')}
                value={this.state.username}
                InputProps={{ startAdornment: (<InputAdornment position="start"><i className="material-icons">person</i></InputAdornment>), }}
                id="outlined-multiline-static"
                name="username"
                label="Username"
                placeholder="e.g. Joey Josephson"
                multiline
                fullWidth
                rows="1"
                margin="normal"
                variant="outlined"
              />
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
            {/* <TextField
                onChange={this.handleInputChangeFor('password')}
                value={this.state.password}
                InputProps={{ startAdornment: (<InputAdornment position="start"><i className="material-icons">vpn_key</i></InputAdornment>), }}
                id="outlined-password-input"
                name="password"
                type="password"
                label="Password"
                autoComplete="current-password"
                placeholder="********"
                multiline
                fullWidth
                rows="1"
                margin="normal"
                variant="outlined"
              /> */}
          </div>
          <br />
          <div>
            <a className="waves-effect waves-light btn-small indigo darken" href="#AddForm"><i className="material-icons right">send</i>
              <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
              style={{color:"white"}}
            /></a>
          </div>
        </form>
        <br />
        <center>
          <p
            // type="button"
            className="register-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
          >
            Register
          </p>
        </center>
        
      </div>
      </Router>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
