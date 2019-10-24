import React, { Component } from 'react';
import Geocode from "react-geocode"
import { connect } from 'react-redux';

// ----------------- THIS ENTIRE COMPONENT IS FOR TEST PURPOSES ONLY ----------------- //

class FindLocation extends Component {

    state = {
        coordinates: {
            address: '',
            city: '',
            state: '',
            zip: '',
            apt: 1,
        },
        testLocation: {
            laty: '',
            lngy: '',
        },
        autoFill: {
            name: '',
            lat: '',
            lng: '',
            URL: '',
            web: '',
        }
    }

    // componentDidMount = () => {
    //     this.handleScriptLoad();
    // }

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
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                console.log(this.state.coordinates);
                this.setState({
                    testLocation: {
                        laty: lat,
                        lngy: lng
                    }
                })
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
                apt: 1,
            }

        });
        console.log(this.state.coordinates);
        console.log(this.state.testLocation);
        
    }


    // handleScriptLoad = () => {
    //     //define google as the global google brought in when script loads and google API is hit
    //     const google = window.google;
    //     //set search options as defined by google
    //     let options = {
    //         types: ['establishment'],
    //         fields: ['name', 'geometry', 'website']
    //     }
    //     // Get the HTML input element on which the autocomplete search box attaches
    //     let input = document.getElementById('findPlace');
    //     //create the autocomplete object - Google's magic
    //     this.autocomplete = new google.maps.places.Autocomplete(input, options);
    //     //attach a listener to fire off a new function when place changes(user selects place)
    //     this.autocomplete.addListener('place_changed', this.placeChangeHandler);
    // }
    // placeChangeHandler = () => {
    //     //get data on the place google search identified
    //     let googleStuff = this.autocomplete.getPlace();
    //     console.log(googleStuff);
    //     this.setState({
    //         autoFill: {
    //         name: googleStuff.name,
    //         // placesId: thePlace.place_id,
    //         lat: googleStuff.geometry.location.lat(),
    //         lng: googleStuff.geometry.location.lng(),
    //         web: googleStuff.website,
    //         }
    //     })        
    // }

    render() {
        return (
            <div>
                <div className="findAddress">
                    <input placeholder="address" value={this.state.coordinates.address} onChange={(event) => { this.handleChange(event, 'address') }} />
                    <input placeholder="city" value={this.state.coordinates.city} onChange={(event) => { this.handleChange(event, 'city') }} />
                    <input placeholder="state" value={this.state.coordinates.state} onChange={(event) => { this.handleChange(event, 'state') }} />
                    <input placeholder="zip" value={this.state.coordinates.zip} onChange={(event) => { this.handleChange(event, 'zip') }} />
                    <button onClick={this.handleClick}>Submit</button>
                    <br />
                </div>
                <br />
                <br />
                <div className="testAutoSearch" >
                    {/* <input placeholder="FIND THIS PLACE!" id="findPlace" type="text"></input> */}
                </div >
                <div>
                    <br/>
                    <p>{this.state.autoFill.name}</p>
                    <p>{this.state.autoFill.lat}</p>
                    <p>{this.state.autoFill.lng}</p>
                    <p>{this.state.autoFill.web}</p>

                </div>
            </div >
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(FindLocation);


// ---- Import Script for Google Autofill ---- //
// This would go in the App.js head 

// import Script from 'react-load-script';
// let googlePlaces = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&libraries=places`
//   <Script url={googlePlaces}/> 


// ---- OLD ADD FROM COMPONENT ---- //
// This was in the old addForm component but googlePlaces API kept crashing the map.

    // componentDidMount = () => {
    //     this.handleScriptLoad();
    // }

    // handleScriptLoad = () => {
    //     //define google as the global google brought in when script loads and google API is hit
    //     const google = window.google;
    //     //set search options as defined by google
    //     let options = {
    //         types: ['establishment'],
    //         fields: ['name', 'geometry', 'website']
    //     }
    //     // Get the HTML input element on which the autocomplete search box attaches
    //     let input = document.getElementById('findPlace');
    //     //create the autocomplete object - Google's magic
    //     this.autocomplete = new google.maps.places.Autocomplete(input, options);
    //     //attach a listener to fire off a new function when place changes(user selects place)
    //     this.autocomplete.addListener('place_changed', this.placeChangeHandler);
    // }
    // placeChangeHandler = () => {
    //     //get data on the place google search identified
    //     let googleStuff = this.autocomplete.getPlace();
    //     console.log(googleStuff);
    //     this.setState({
    //         location: {
    //         name: googleStuff.name,
    //         lat: googleStuff.geometry.location.lat(),
    //         lng: googleStuff.geometry.location.lng(),
    //         URL: googleStuff.website,
    //         }
    //     })        
    // }