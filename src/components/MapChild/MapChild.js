// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { HashRouter as Router } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
// import mapStyles from "../mapStyles"




function Map() {


    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 44.977753, lng: -93.265015 }}
            
        >
        </GoogleMap>
    )
}



const DrinkLinkMap = withScriptjs(withGoogleMap(Map))

function MapChild() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <DrinkLinkMap googleMapURL=
                {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(MapChild);