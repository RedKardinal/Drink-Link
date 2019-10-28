// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// ---- Import CSS ---- //
import './ItemLocationEdit.css'
// ---- Import Material UI --- //
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import swal from 'sweetalert';

// This page handles changes for single location that are selected.
// Users can update information on location to be PUT in database.
class ItemLocationEdit extends Component {

    state = {
        id: this.props.match.params.id,
        name: ``,
        time: ``,
        detail: ``,
        URL: ``,
        lat: ``,
        lng: ``
    };

    // Fetches single location by ID.
    componentDidMount() {
        console.log(this.props.match.params);
        this.props.dispatch({ type: 'FETCH_LOCATION_ID', payload: this.props.match.params.id });
    } // end componentDidMount

    // Loads information about location into textfields. If no edits, nothing is changed in DB.
    loadFields = () => {
        this.props.reduxStore.locationIdReducer.forEach(element => {
            this.setState({
                name: element.name,
                time: element.time,
                detail: element.detail,
                URL: element.URL,
                lat: element.lat,
                lng: element.lng
            });
        })
    } // end loadFields

    // If no edits, nothing is changed in DB.
    componentDidUpdate(previousProps) {
        if (this.props.reduxStore.locationIdReducer !== previousProps.reduxStore.locationIdReducer) {
            this.loadFields();
        }
    } // end componentDidUpdate

    // Handles change in textfields.
    handleChange = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        })
        console.log('Edit', this.state)
    } // handles Change in input fields

    // PUTs changes to database before success notification and push to preview page.
    handleEdit = () => {
        this.props.dispatch({ type: 'UPDATE_LOCATION', payload: this.state })
        swal("Success!", "Location have been updated", "success")
        this.props.history.push("/LocationEdit")
    } // end handleEdit

    // Pushes admin back to preview page.
    handleBack = () => {
        this.props.history.push("/LocationEdit")
    } // end handleBack

    render() {
        return (
            <div className="textLocation">
                <h5>Edit Business and Location</h5>
                {this.props.reduxStore.locationIdReducer.map((bar) => {
                    return (
                        <ul key={bar.id}>
                            <p><i className="material-icons">person_outline</i> User ID that Submitted: {bar.user_id}</p>
                            <TextField
                                onChange={(event) => this.handleChange('name', event)}
                                value={this.state.name}
                                InputProps={{ startAdornment: (<InputAdornment position="start"><i className="material-icons">local_bar</i></InputAdornment>), }}
                                id="outlined-multiline-static"
                                label="Location Name"
                                // placeholder="e.g. Prime Bar"
                                multiline
                                fullWidth
                                rows="1"
                                margin="normal"
                                variant="outlined"
                            />
                            {/* <input onChange={(event) => this.handleChange('name', event)} value={this.state.name}></input> */}
                            <TextField
                                onChange={(event) => this.handleChange('time', event)}
                                value={this.state.time}
                                InputProps={{ startAdornment: (<InputAdornment position="start"><i className="material-icons">access_time</i></InputAdornment>), }}
                                id="outlined-multiline-static"
                                label="Happy Hour Times"
                                placeholder="e.g. 4:00pm-6:00pm"
                                multiline
                                fullWidth
                                rows="1"
                                margin="normal"
                                variant="outlined"
                            />
                            {/* <input onChange={(event) => this.handleChange('time', event)} value={this.state.time} ></input> */}
                            <TextField
                                onChange={(event) => this.handleChange('detail', event)}
                                value={this.state.detail}
                                InputProps={{ startAdornment: (<InputAdornment position="start"><i className="material-icons">today</i></InputAdornment>), }}
                                id="outlined-multiline-static"
                                label="Days of the week"
                                placeholder="e.g. Monday-Friday"
                                multiline
                                fullWidth
                                rows="1"
                                margin="normal"
                                variant="outlined"
                            />
                            {/* <input onChange={(event) => this.handleChange('detail', event)} value={this.state.detail}></input> */}
                            {/* <p>Website: <a href={bar.URL}>{bar.URL}</a></p> */}
                            <TextField
                                onChange={(event) => this.handleChange('URL', event)}
                                value={this.state.URL}
                                InputProps={{ startAdornment: (<InputAdornment position="start"><i className="material-icons">web</i></InputAdornment>), }}
                                id="outlined-multiline-static"
                                label="Website"
                                placeholder="e.g. www.barName.com"
                                multiline
                                fullWidth
                                rows="1"
                                margin="normal"
                                variant="outlined"
                            />
                            {/* <input onChange={(event) => this.handleChange('URL', event)} value={this.state.URL}></input> */}
                            {/* <h5>Location</h5> */}
                            <TextField
                                onChange={(event) => { this.handleChange('lat', event) }}
                                value={this.state.lat}
                                InputProps={{ startAdornment: (<InputAdornment position="start"><i className="material-icons">category</i></InputAdornment>), }}
                                id="outlined-multiline-static"
                                label="Latitude"
                                placeholder="e.g. 301 S 4th Ave, Minneapolis, MN 55415"
                                multiline
                                fullWidth
                                rows="1"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(event) => { this.handleChange('lng', event) }}
                                value={this.state.lng}
                                InputProps={{ startAdornment: (<InputAdornment position="start"><i className="material-icons">category</i></InputAdornment>), }}
                                id="outlined-multiline-static"
                                label="Latitude"
                                placeholder="e.g. 301 S 4th Ave, Minneapolis, MN 55415"
                                multiline
                                fullWidth
                                rows="1"
                                margin="normal"
                                variant="outlined"
                            />
                            {/* <input onChange={(event) => this.handleChange('lat', event)} value={this.state.lat}></input>
                            <input onChange={(event) => this.handleChange('lng', event)} value={this.state.lng}></input> */}
                            <br />
                            <br />
                            <div className="submitAndBack">
                                <div className="gridItem1">
                                <a onClick={this.handleBack} className="waves-effect waves-light btn-large" href="#LocationEdit"><i className="material-icons left">arrow_back_ios</i>Back</a>
                                </div>
                                <div className="gridItem2">
                                <a onClick={() => this.handleEdit(bar.id)} className="waves-effect waves-light btn-large" href="#LocationEdit"><i className="material-icons right">send</i>Submit</a>
                                </div>
                            </div>

                        </ul>
                    )
                })}
            </div>

        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
});
export default withRouter(connect(mapStateToProps)(ItemLocationEdit));