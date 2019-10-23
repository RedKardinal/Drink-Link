// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import './AddForm.css';
import TextField from '@material-ui/core/TextField';

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

    // handleChanges for the inputs
    handleChange = (event, propertyName) => {
        console.log(event.target.value);
        this.setState({
            location: {
                ...this.state.location,
                [propertyName]: event.target.value
            }
        })
    } // end handleChange

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

    // handleClick = (event) => {
    //     this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state.location })
    //     console.log(this.state.location);
    //     this.setState({
    //         location: {
    //             name: '',
    //             time: '',
    //             web: '',
    //             detail: '',
    //         }
    //     });
    // }

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
            <div>
                <h3>Add a Location</h3>

                {/* <input onChange={(event) => { this.handleChange(event, 'name') }} placeholder="Name" value={this.state.location.name}/> */}

                {/* <input placeholder="Add Location!" id="findPlace" type="text"></input> */}
                <br />
                <input onChange={(event) => { this.handleChange(event, 'time') }} placeholder="Happy Hour Times" value={this.state.location.time} />
                <br />
                {/* <input onChange={(event) => { this.handleChange(event, 'web') }} placeholder="Website" value={this.state.location.web}/> */}
                <br />
                <textarea onChange={(event) => { this.handleChange(event, 'detail') }} placeholder="Details" value={this.state.location.detail} rows="4" cols="70" />
                <br />
                {/* <input placeholder="Address"/> */}
                <br />
                {/* <button onClick={this.handleClick}>Add Location!</button> */}
                <div className="submit">
                    <a onClick={this.handleClick} className="waves-effect waves-light btn" href="#AddForm"><i className="material-icons right">send</i>Submit</a>
                </div>
                <TextField 
                    id="outlined-multiline-static"
                    label="Comments"
                    multiline
                    fullWidth
                    rows="4"
                    margin="normal"
                    variant="outlined"
                />
                <br />
                {/* <p>{this.state.location.name}</p>
                    <p>{this.state.location.time}</p>
                    <p>{this.state.location.URL}</p>
                    <p>{this.state.location.detail}</p>
                    <p>{this.state.location.lat}</p>
                    <p>{this.state.location.lng}</p> */}

            </div>

        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(AddForm);