import React, { Component } from 'react';
import {connect} from 'react-redux';
// ---- Import Material UI --- //
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import LogoS from '../Media/LogoS.svg'

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h3>Register</h3>
          <img src={LogoS} alt="website-logo"/>
          <div>
            {/* <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label> */}
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
          </div>
          <div className="abitlower">
          <a className="waves-effect waves-light btn-small indigo darken" href="#AddForm"><i className="material-icons right">send</i>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Register"
            /></a>
          </div>
        </form>
        <center>
          <p
            // type="button"
            className="register-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </p>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

