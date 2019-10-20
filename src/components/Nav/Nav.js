import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// import { Button, SideNav, SideNavItem, Icon, Navbar, NavItem } from 'react-materialize';
import './Nav.css';

const Nav = (props) => (
  <div className="nav" nav="nav-wrapper">
    <Link to="/home">
      <h2 className="nav-title">Prime Solo Project</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          {/* <Link className="nav-link" to="/info">
            Info Page
          </Link> */}

          <Link className="nav-link" to="/Map">
            Map
          </Link>

          <Link className="nav-link" to="/AddForm">
            Add Form
          </Link>

          <Link className="nav-link" to="/LocationList">
            The List
          </Link>

          <Link className="nav-link" to="/LocationApprove">
            Location Approval Page
          </Link>

          <Link className="nav-link" to="/LocationEdit">
            Edit List
          </Link>

          <Link className="nav-link" to="/UserEdit">
            Edit Users
          </Link>

          <LogOutButton className="nav-link"/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      {/* <Link className="nav-link" to="/about">
        About
      </Link> */}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);

// class Nav extends Component {



//   render() {
//     return (
//       <Router>

//       <div>
//         <Navbar className="teal">
//           <NavItem>
//           </NavItem>
//             <SideNav className="default" trigger={<Button><Icon large className="default">menu</Icon></Button>} options={{ closeOnClick: true }}>
//             <SideNavItem userView user={{
//           background: 'https://placeimg.com/640/480/tech',
//           image: 'big old box',
//           name: `JOE SCHMO'OLY`,

//             }} />
//             </SideNav>

            
//         </Navbar>
//       </div>


//       </Router>
//     )
//   }
// }

// const mapStateToProps = (reduxStore) => ({
//   reduxStore
// });
// export default connect(mapStateToProps)(Nav);
