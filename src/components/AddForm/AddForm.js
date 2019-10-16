// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import './AddForm.css';

class AddForm extends Component {
    
    // State for setting form information
    state = {
        location: {
            name: '',
            time: '',
            web: '',
            detail: '',
        }
    } // end state

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

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state.location })
        console.log(this.state.location);
        // this.setState({
        //     location: {
        //         name: '',
        //         time: '',
        //         web: '',
        //         detail: '',
        //     }
        // })
    }


    render() {
        return (
            <Router>
                <div>
                    <h1>Add a Location</h1>
                    <input onChange={(event) => { this.handleChange(event, 'name') }} placeholder="Name"/>
                    <br/>
                    <input onChange={(event) => { this.handleChange(event, 'time') }} placeholder="Happy Hour Times"/>
                    <br/>
                    <input onChange={(event) => { this.handleChange(event, 'web') }} placeholder="Website"/>
                    <br/>
                    <textarea onChange={(event) => { this.handleChange(event, 'detail') }} placeholder="Details" rows="4" cols="70"/>
                    <br/>
                    <input placeholder="Address"/>
                    <br/>
                    <button onClick={this.handleClick}>Add Location!</button>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(AddForm);