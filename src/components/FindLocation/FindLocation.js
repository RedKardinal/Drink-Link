import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GeoCode from "react-geocode"
import { connect } from 'react-redux';

class FindLocation extends Component {

    render() {
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
                        >


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
export default connect(mapStateToProps)(FindLocation);