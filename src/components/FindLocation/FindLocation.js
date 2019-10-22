import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode"
import { connect } from 'react-redux';

class FindLocation extends Component {

    state={
        coordinates: {
        address: '',
        city: '',
        state: '',
        zip: '',
        apt: 1
        }
    }

    handleChange = (event, propertyName) => {
        console.log(event.target.value);
        this.setState({
            coordinates: {
                ...this.state.coordinates,
                [propertyName]: event.target.value
            }
        })
    } // end handleChange

    handleClick = (event) => {
        console.log(this.state.coordinates);
        Geocode.setLanguage("en");
        Geocode.setRegion("us");
        Geocode.enableDebug(true);
        Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_KEY}`);
        Geocode.fromAddress(JSON.stringify(this.state.coordinates)).then(
            response => {
                const {lat, lng} = response.results[0].geometry.location;
                console.log(lat, lng);
            },
            error => {
                console.log(error);         
            }
        )
        this.setState({
            coordinates: {
                address: '',
                city: '',
                state: '',
                zip: '',
                apt: 1
            }
        });
    }
      

    render() {
        return (
            <div>
                <div className="findAddress">
                    <input placeholder="address" value={this.state.coordinates.address} onChange={(event) => { this.handleChange(event, 'address') }}/>
                    <input placeholder="city" value={this.state.coordinates.city} onChange={(event) => { this.handleChange(event, 'city') }}/>
                    <input placeholder="state" value={this.state.coordinates.state} onChange={(event) => { this.handleChange(event, 'state') }}/>
                    <input placeholder="zip" value={this.state.coordinates.zip} onChange={(event) => { this.handleChange(event, 'zip') }}/>
                    <button onClick={this.handleClick}>Submit</button>
                    <br/>
                </div>
                <br/>
                <div className="MapLocation">
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