// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
// ---- Import CSS ---- //

class ItemLocationEdit extends Component {

    componentDidMount() {
        console.log(this.props.match.params);
        this.props.dispatch({ type: 'FETCH_LOCATION_ID', payload: this.props.match.params });
    }

    handleEdit = () => {
        this.props.dispatch({ type: 'UPDATE_LOCATION', payload: this.state })
    }

    render() {
        return(
            <Router>
            <div>
                <h4>Edit Business and Location</h4>
                {this.props.reduxStore.locationIdReducer.map((bar) => {
                    return (
                    <ul key={bar.id}>
                        <h5>Location details</h5>
                        <li>Name: {bar.name}</li>
                        <li>Happy Hour Times: {bar.time}</li>
                        <li>Additional details: {bar.detail}</li>
                        <li>Webiste: <a href={bar.URL}>{bar.URL}</a></li>
                        <h5>Location</h5>
                        <li>Latitude: {bar.lat}</li>
                        <li>Longitude: {bar.lng}</li>
                        <br/>
                        {/* <button onClick={()=>this.handleEdit(bar.id)}>Edit</button> */}
                    </ul>
                    )
                })}
            </div>
            </Router>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
});
export default withRouter(connect(mapStateToProps)(ItemLocationEdit));