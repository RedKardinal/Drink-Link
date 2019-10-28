import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS & Photos ---- //
import './Nav.css';
import Background from '../Media/background.png';
import UserIcon from '../Media/usericon.jpg';
// ---- Import Materialize CSS ---- //
import { Button, SideNav, SideNavItem, NavItem } from 'react-materialize';

// Nav bar on top of screen once logged in. 
const Nav = (props) => (

  <div>
    <div className="goLeft">
      <div className="goLeft"></div>
      {/* {props.user.id ? 'Home' : 'Login / Register'} */}

      {props.user.id && (

        <SideNav trigger={<Button className="black btn-large"><i className="large material-icons">menu</i></Button>} options={{ closeOnClick: true }}>
          <SideNavItem className="avatar" userView user={{
            background: `${Background}`,
            image: `${UserIcon}`,
            name: 'Welcome to',
            email: <h6>Drink Linkz</h6>,
          }} />
          <NavItem divider />
          <div className="navLeft">
            <SideNavItem href="/Map" icon="map" className="iconText">
              <Link to="/Map">The Map</Link>
            </SideNavItem>
            <br />
            <SideNavItem href="/LocationList" icon="list" className="iconText">
              <Link to="/LocationList">Happy Hour List</Link>
            </SideNavItem>
            <br />
            <SideNavItem href="/AddForm" icon="add_circle" className="iconText">
              <Link to="/AddForm">Add a Location</Link>
            </SideNavItem>
            <br />

            {props.user.admin && (
              <>
                <SideNavItem href="/LocationApprove" icon="check_circle" className="iconText">
                  <Link to="/LocationApprove">Approve Location</Link>
                </SideNavItem>
                <br />
                <SideNavItem href="/LocationEdit" icon="edit" className="iconText">
                  <Link to="/LocationEdit">Edit Locations</Link>
                </SideNavItem>
                <br />
                <SideNavItem href="/UserEdit" icon="supervised_user_circle" className="iconText">
                  <Link to="/UserEdit">Moderate Users</Link>
                </SideNavItem>
                <br />
              </>
            )}
            <SideNavItem className="logOutBtn" icon="double_arrow" >
              <Link onClick={() => props.dispatch({ type: 'LOGOUT' })}>Log Out</Link>
            </SideNavItem>
          </div>
        </SideNav>
      )}
    </div>
  </div>

)

const mapStateToProps = state => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Nav));