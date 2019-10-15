// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import './AddForm.css';

class AddForm extends Component {
    
    // State for setting form information
    state = {
        item: {
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
            item: {
                ...this.state.item,
                [propertyName]: event.target.value
            }
        })
    } // end handleChange


    render() {
        return (
            <Router>
                <div>
                    <h1>Add a Location</h1>
                    <input onChange={(event) => { this.handleChange(event, 'name') }} placeholder="Name"></input>
                    <br/>
                    <input onChange={(event) => { this.handleChange(event, 'time') }} placeholder="Happy Hour Times"></input>
                    <br/>
                    <input onChange={(event) => { this.handleChange(event, 'web') }} placeholder="Website"></input>
                    <br/>
                    <textarea onChange={(event) => { this.handleChange(event, 'detail') }} placeholder="Details" rows="4" cols="70"></textarea>
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