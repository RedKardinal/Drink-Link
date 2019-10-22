import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Map.css'
import MapIcons from '../MapIcons/MapIcons'
import Styles from './mapStyles'


import {
    GoogleMap,
    LoadScript,
} from '@react-google-maps/api';


class Map extends Component {

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    render() {
        const mapStyles = Styles
        return (
            <div>
                <div className="Map">
                    <LoadScript
                        id="script-loader"
                        googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
                    >
                        <GoogleMap
                            className="example-map"
                            // extraMapTypes={Styles}
                            mapContainerStyle={{
                                height: "100vh",
                                width: "auto"
                            }}
                            zoom={15}
                            center={{
                                lat: 44.977753,
                                lng: -93.265015,
                            }}
                            options={{styles:mapStyles}}
                        >
                            {this.props.reduxStore.locationReducer.map((location) => {
                                return(
                                    <MapIcons location={location}/>
                                )
                            })}

                        </GoogleMap>
                    </LoadScript>

                </div >
            </div >
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(Map);