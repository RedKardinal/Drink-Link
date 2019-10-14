// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import './AddForm.css';

class App extends Component {

  render() {
    return (
      <Router>
          <div>
              This is test text
          </div>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapStateToProps)(App);