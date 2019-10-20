import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
// import MapChild from '../MapChild/MapChild';
// import { GoogleMap } from 'react-google-maps';
import './Map.css'

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";


// class Map extends Component {

//     componentDidMount() {
//         this.getLocations();
//         this.renderMap();
//     } // end componentDidMount

//     getLocations = () => {
//         this.props.dispatch({ type: 'FETCH_LOCATION' })
//     }

//     renderMap = () => {
//         loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&callback=initMap`)
//         window.initMap = this.initMap
//     }

//     initMap = () => {

//         // Create A Map
//         var map = new window.google.maps.Map(document.getElementById('map'), {
//           center: {lat: 44.977753, lng: -93.265015},
//           zoom: 15
//         })
//     }


//     render () {
//         return (
//             <Router>
//                 <div id="map">

//                     {/* <MapChild/> */}

//                 </div>
//            </Router>
//         )
//     }
// }

// function loadScript(url) {
//     var index  = window.document.getElementsByTagName("script")[0]
//     var script = window.document.createElement("script")
//     script.src = url
//     script.async = true
//     script.defer = true
//     index.parentNode.insertBefore(script, index)
// }



class Map extends Component {

    static defaultProps = {
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }



    CMap = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 44.977753, lng: -93.265015 }}
        >
            {props.children}
        </GoogleMap>
    ));



    render() {
        return (
            <Fragment>
                <this.CMap
                    googleMapURL={this.props.googleMapURL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `700px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    center={{ lat: 25.03, lng: 121.6 }}
                >

                    {this.props.reduxStore.locationReducer.map((location) => (
                        <Marker key={location.id}
                            position={{
                                lat: location.lat,
                                lng: location.lng
                            }}
                        />
                    ))}
                </this.CMap>
            </Fragment>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(Map);