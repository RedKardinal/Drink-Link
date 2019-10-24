import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Button, SideNav, SideNavItem, Icon, Navbar, NavItem } from 'react-materialize';
import './Nav.css';
import './vector.svg'

// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';


// const Nav = (props) => (
//   <div className="nav" nav="nav-wrapper">
//     <Link to="/home">
//       {/* <h2 className="nav-title">Drink Linkz</h2> */}
//     </Link>
//     <div className="nav-right">
//       <Link className="nav-link" to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {props.user.id ? 'Home' : 'Login / Register'}
//       </Link>
//       {/* Show the link to the info page and the logout button if the user is logged in */}
//       {props.user.id && (
//         <>
//           {/* <Link className="nav-link" to="/info">
//             Info Page
//           </Link> */}

//           <Link className="nav-link" to="/Map">
//             Map
//           </Link>

//           <Link className="nav-link" to="/AddForm">
//             Add Form
//           </Link>

//           <Link className="nav-link" to="/LocationList">
//             The List
//           </Link>

//           <Link className="nav-link" to="/LocationApprove">
//             Location Approval Page
//           </Link>

//           <Link className="nav-link" to="/LocationEdit">
//             Edit List
//           </Link>

//           <Link className="nav-link" to="/UserEdit">
//             Edit Users
//           </Link>

//           <LogOutButton className="nav-link"/>
//         </>
//       )}
//       {/* Always show this link since the about page is not protected */}
//       {/* <Link className="nav-link" to="/about">
//         About
//       </Link> */}
//     </div>
//   </div>
// );

// // Instead of taking everything from state, we just want the user
// // object to determine if they are logged in
// // if they are logged in, we show them a few more links 
// // if you wanted you could write this code like this:
// // const mapStateToProps = ({ user }) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
// });

// export default connect(mapStateToProps)(Nav);


class Nav extends Component {



  render() {
    return (
      <Router>
        <div>
          <div className="goLeft">
          <div className="goLeft"></div>
          <SideNav trigger={<Button className="black btn-large"><i className="large material-icons">menu</i></Button>} options={{closeOnClick: true}}>
              <SideNavItem className="avatar" userView user={{
                background: 'https://image.shutterstock.com/image-photo/selection-alcoholic-drinks-on-rustic-260nw-570169324.jpg',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsfIbM_FkH_Z8GjeW4puxbrwy_KmLqThFkCmA3zqUf_C-d6QUh',
                name: 'Marty',
                email: 'Drink Linkz',

              }} />
              

              <NavItem divider />
              <div className="navLeft">
              <SideNavItem href="/Map" icon="map" className="iconText">
              {/* <Link to="/Map">Map</Link> */}The Map
              </SideNavItem>
              <br/>
              <SideNavItem href="/LocationList" icon="list" className="iconText">
              {/* <Link to="/LocationList">The List</Link> */}Happy Hour List
              </SideNavItem>
              <br/>
              <SideNavItem href="/AddForm" icon="add_circle" className="iconText">
              {/* <Link to="/AddForm">Add Form</Link> */}Add a Location
              </SideNavItem>
              <br/>
              <SideNavItem href="/LocationApprove" icon="check_circle" className="iconText">
              {/* <Link to="/LocationApprove">Approve Location</Link>*/}Approve Locations
              </SideNavItem>
              <br/>
              <SideNavItem href="/LocationEdit" icon="edit" className="iconText">
              {/* <Link to="/LocationEdit"></Link> */}Edit Locations
              </SideNavItem>
              <br/>
              <SideNavItem href="/UserEdit" icon="supervised_user_circle" className="iconText">
              {/* <Link to="/UserEdit"></Link> */}Moderate Users
              </SideNavItem>
              <br />
              <SideNavItem className="logOutBtn" icon="double_arrow"><LogOutButton className="nav-link" /></SideNavItem>
              </div>
              </SideNav>
              
          </div>
        </div>
      </Router>

    )
  }
}
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);

























// const Nav = (props) => (
//   <div className="nav" nav="nav-wrapper">
//         <Button>Open Left</Button>
//         <Drawer>

//         </Drawer>




//     <Link to="/home">
//       {/* <h2 className="nav-title">Drink Linkz</h2> */}
//     </Link>
//     <div className="nav-right">
//       <Link className="nav-link" to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {props.user.id ? 'Home' : 'Login / Register'}
//       </Link>
//       {/* Show the link to the info page and the logout button if the user is logged in */}
//       {props.user.id && (
//         <>
//           {/* <Link className="nav-link" to="/info">
//             Info Page
//           </Link> */}

//           <Link className="nav-link" to="/Map">
//             Map
//           </Link>

//           <Link className="nav-link" to="/AddForm">
//             Add Form
//           </Link>

//           <Link className="nav-link" to="/LocationList">
//             The List
//           </Link>

//           <Link className="nav-link" to="/LocationApprove">
//             Location Approval Page
//           </Link>

//           <Link className="nav-link" to="/LocationEdit">
//             Edit List
//           </Link>

//           <Link className="nav-link" to="/UserEdit">
//             Edit Users
//           </Link>

//           <LogOutButton className="nav-link"/>
//         </>
//       )}
//       {/* Always show this link since the about page is not protected */}
//       {/* <Link className="nav-link" to="/about">
//         About
//       </Link> */}
//     </div>
//   </div>
// );

// // Instead of taking everything from state, we just want the user
// // object to determine if they are logged in
// // if they are logged in, we show them a few more links 
// // if you wanted you could write this code like this:
// // const mapStateToProps = ({ user }) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
// });

// export default connect(mapStateToProps)(Nav);