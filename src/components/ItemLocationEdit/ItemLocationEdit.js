// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
// ---- Import CSS ---- //
import './ItemLocationEdit.css'

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
    
    componentDidMount() {
        console.log(this.props.match.params);
        this.props.dispatch({ type: 'FETCH_LOCATION_ID', payload: this.props.match.params.id });
    }

    componentDidUpdate(previousProps) {
        if (this.props.reduxStore.locationIdReducer !== previousProps.reduxStore.locationIdReducer) {
        this.loadFields(); }
    }

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
    }
    
    handleChange = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        })
        console.log('Edit', this.state)
    } // handles Change in input fields

    handleEdit = () => {
        this.props.dispatch({ type: 'UPDATE_LOCATION', payload: this.state })
        this.props.history.push("/LocationEdit")
    }

    render() {
        return(
            <div>
                <h4>Edit Business and Location</h4>
                {this.props.reduxStore.locationIdReducer.map((bar) => {
                    return (
                    <ul key={bar.id}>
                        <h5>Location details</h5>
                        <p>User Submitted: {bar.user_id}</p>
                        <input onChange={(event) => this.handleChange('name', event)} value={this.state.name}></input>
                        <input onChange={(event) => this.handleChange('time', event)} value={this.state.time} ></input>
                        <input onChange={(event) => this.handleChange('detail', event)} value={this.state.detail}></input>
                        <p>Webiste: <a href={bar.URL}>{bar.URL}</a></p>
                        <input onChange={(event) => this.handleChange('URL', event)} value={this.state.URL}></input>
                        <h5>Location</h5>
                        <input onChange={(event) => this.handleChange('lat', event)} value={this.state.lat}></input>
                        <input onChange={(event) => this.handleChange('lng', event)} value={this.state.lng}></input>
                        <br/>
                        <div className="submit">
                        <a onClick={()=>this.handleEdit(bar.id)} className="waves-effect waves-light btn" href="#LocationEdit"><i className="material-icons right">send</i>Submit</a>
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