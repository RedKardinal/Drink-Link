// ---- Import Redux, Routers, & React ---- //
import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
// ---- Connect Pages to App.js ---- //
import AboutPage from '../AboutPage/AboutPage';
import FindLocation from '../FindLocation/FindLocation'
// import Footer from '../Footer/Footer';
import InfoPage from '../InfoPage/InfoPage';
import ItemLocationEdit from '../ItemLocationEdit/ItemLocationEdit';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Nav from '../Nav/Nav';
import UserPage from '../UserPage/UserPage';
import AddForm from '../AddForm/AddForm';
import LocationList from '../LocationList/LocationList';
import LocationApprove from '../LocationApprove/LocationApprove';
import LocationEdit from '../LocationEdit/LocationEdit';
import Map from '../Map/Map';
import UserEdit from '../UserEdit/UserEdit';
// ---- CSS ---- //
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  } // end componenetDidMount

  // let googlePlaces loads the scripts I need to use the autofill...
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home 
            All users will be able to view the following routes upon registration. */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/Map"
              component={Map}
            />
            <ProtectedRoute
              exact
              path="/AddForm"
              component={AddForm}
            />
            <ProtectedRoute
              exact
              path="/LocationList"
              component={LocationList}
            />
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* These are routes that only the admin will see. Backend protection is provided as well */}
            <ProtectedRoute
              exact
              path="/LocationApprove"
              component={LocationApprove}
            />
            <ProtectedRoute
              exact
              path="/LocationEdit"
              component={LocationEdit}
            />
            <ProtectedRoute
              exact
              path="/ItemLocationEdit/:id"
              component={ItemLocationEdit}
            />
            <ProtectedRoute
              exact
              path="/UserEdit"
              component={UserEdit}
            />
            {/* Find Locations is a test component for Google API feature within the app. There is no nav link to it. */}
            <ProtectedRoute
              exact
              path="/FindLocation"
              component={FindLocation}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404 Yikes!</h1>} />
            <Route exact path='/AddForm' component={AddForm}></Route>
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router> 
  )}
}


// const mapStateToProps = state => ({
//   user: state.user,
// });
// export default connect(mapStateToProps)(App);

export default connect()(App);