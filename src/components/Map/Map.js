import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import './Map.css'
import MapIcons from '../MapIcons/MapIcons'
import Styles from './mapStyles'
import {
    GoogleMap,
    LoadScript,
} from '@react-google-maps/api';

// This component renders the MAP for the app.
class Map extends Component {

    // Mounts getLocation on pageload.
    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    // Calls locations to be passed down to MapIcons component
    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    } // end getLocations

    render() {
        const mapStyles = Styles
        return (
            <Router>
                <div>
                    <div className="Map">
                        <LoadScript
                            id="script-loader"
                            googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
                        >
                            <GoogleMap
                                className="example-map"
                                mapContainerStyle={{
                                    height: "95vh",
                                    width: "auto"
                                }}
                                zoom={15}
                                center={{
                                    lat: 44.9746234,
                                    lng: -93.2685388,
                                }}
                                options={{ styles: mapStyles }}
                            >
                                {this.props.reduxStore.locationReducer.map((location) => {
                                    return (
                                        <MapIcons location={location} />
                                    )
                                })}

                            </GoogleMap>
                        </LoadScript>
                    </div >
                </div >
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(Map);