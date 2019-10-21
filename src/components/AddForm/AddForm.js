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

    handleClick = (event) => {
        this.props.dispatch({ type: 'ADD_LOCATION', payload: this.state.location })
        console.log(this.state.location);
        this.setState({
            location: {
                name: '',
                time: '',
                web: '',
                detail: '',
            }
        });
    }


    render() {
        return (

                <div>
                    <h1>Add a Location</h1>
                    
                    <input onChange={(event) => { this.handleChange(event, 'name') }} placeholder="Name" value={this.state.location.name}/>
                    <br/>
                    <input onChange={(event) => { this.handleChange(event, 'time') }} placeholder="Happy Hour Times" value={this.state.location.time}/>
                    <br/>
                    <input onChange={(event) => { this.handleChange(event, 'web') }} placeholder="Website" value={this.state.location.web}/>
                    <br/>
                    <textarea onChange={(event) => { this.handleChange(event, 'detail') }} placeholder="Details" value={this.state.location.detail} rows="4" cols="70"/>
                    <br/>
                    <input placeholder="Address"/>
                    <br/>
                    {/* <button onClick={this.handleClick}>Add Location!</button> */}
                    <div className="submit">
                    <a onClick={this.handleClick} class="waves-effect waves-light btn"><i className="material-icons right">send</i>Submit</a>
                    </div>
                    
                </div>

        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(AddForm);