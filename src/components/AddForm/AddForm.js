// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import './AddForm.css';
// ---- Import Material UI --- //
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';

class AddForm extends Component {

    // State for setting form information
    state = {
        location: {
            name: '',
            time: '',
            URL: '',
            detail: '',
            lat: '',
            lng: ''
        }
    } // end state

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

    handleChange = (event, propertyName) => {
        console.log(event.target.value);
        this.setState({
            location: {
                ...this.state.location,
                [propertyName]: event.target.value
            }
        })
    } // end handleChange

    handleClick = (event) => {
        this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state.location })
        console.log(this.state.location);
        this.setState({
            location: {
                name: '',
                time: '',
                URL: '',
                detail: '',
                lat: '',
                lng: ''
            }
        });
    }


    render() {
        return (
            <div className="textLocation">
                <h3>Add a Location</h3>
                <br />
                <TextField 
                    onChange={(event) => { this.handleChange(event, 'name') }}
                    value={this.state.location.name}
                    InputProps={{startAdornment: (<InputAdornment position="start"><i className="material-icons">local_bar</i></InputAdornment>),}}
                    id="outlined-multiline-static"
                    label="Location Name"
                    placeholder="e.g. Prime Bar"
                    multiline
                    fullWidth
                    rows="1"
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField 
                    onChange={(event) => { this.handleChange(event, 'time') }}
                    value={this.state.location.time}
                    InputProps={{startAdornment: (<InputAdornment position="start"><i className="material-icons">access_time</i></InputAdornment>),}}
                    id="outlined-multiline-static"
                    label="Happy Hour Times"
                    placeholder="e.g. 4:00pm-6:00pm"
                    multiline
                    fullWidth
                    rows="1"
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField 
                    onChange={(event) => { this.handleChange(event, 'detail') }}
                    value={this.state.location.detail}
                    InputProps={{startAdornment: (<InputAdornment position="start"><i className="material-icons">today</i></InputAdornment>),}}
                    id="outlined-multiline-static"
                    label="Days of the week"
                    placeholder="e.g. Monday-Friday"
                    multiline
                    fullWidth
                    rows="1"
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField 
                    onChange={(event) => { this.handleChange(event, 'URL') }}
                    value={this.state.location.URL}
                    InputProps={{startAdornment: (<InputAdornment position="start"><i className="material-icons">web</i></InputAdornment>),}}
                    id="outlined-multiline-static"
                    label="Website"
                    placeholder="e.g. www.barName.com"
                    multiline
                    fullWidth
                    rows="1"
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField 
                    // onChange={(event) => { this.handleChange(event, 'address') }}
                    // value={this.state.location.address}
                    InputProps={{startAdornment: (<InputAdornment position="start"><i className="material-icons">location_city</i></InputAdornment>),}}
                    id="outlined-multiline-static"
                    label="Address"
                    placeholder="e.g. 301 S 4th Ave, Minneapolis, MN 55415"
                    multiline
                    fullWidth
                    rows="1"
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <br />
                <div className="submit">
                    <a onClick={this.handleClick} className="waves-effect waves-light btn-large" href="#AddForm"><i className="material-icons right">send</i>Submit</a>
                </div>

                {/* <input placeholder="Add Location!" id="findPlace" type="text"></input> */}

            </div>

        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(AddForm);