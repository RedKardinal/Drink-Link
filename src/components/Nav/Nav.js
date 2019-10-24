import React from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// import { Button, SideNav, SideNavItem, Icon, Navbar, NavItem } from 'react-materialize';
import './Nav.css';
import './vector.svg'

const Nav = (props) => (
  <div className="nav" nav="nav-wrapper">
    <Link to="/home">
      {/* <h2 className="nav-title">Drink Linkz</h2> */}
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
//         <div>
//           <div className="nav-wrapper">
//             <Navbar brand={<a className="Lo" href="/">Drink Linkz</a>} centerLogo alignLinks="left" className="logo black">
//               <SideNavItem className="avatar" userView user={{
//                 background: 'https://placeimg.com/640/480/tech',
//                 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsfIbM_FkH_Z8GjeW4puxbrwy_KmLqThFkCmA3zqUf_C-d6QUh',
//                 name: 'Welcome!',
//                 email: 'bingo',

//               }} />

//               <NavItem divider />

//               <Link to="/Map"><i className="material-icons">home</i>Map</Link>

//               <Link to="/LocationList"><i className="material-icons">list</i>The List</Link>
//               <Link to="/AddForm"><i className="material-icons">add_circle</i>Add Form</Link>

//               <Link to="/LocationApprove"><i className="material-icons">check_circle</i>Approve Location</Link>

//               <Link to="/LocationEdit"><i className="material-icons">edit</i>Edit Location</Link>

//               <Link to="/UserEdit"><i className="material-icons">supervised_user_circle</i>User Edit</Link>
//               <br />
//               <br />
//               <br />


//               <NavItem className="avatar"><LogOutButton className="nav-link" /></NavItem>

//             </Navbar>

//           </div>
//         </div>
//       </Router>

//     )
//   }
// }



// const mapStateToProps = state => ({
//   user: state.user,
// });

// export default connect(mapStateToProps)(Nav);
