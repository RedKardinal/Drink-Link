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
                        <input placeholder={bar.name}></input>
                        <input placeholder={bar.time}></input>
                        <input placeholder={bar.detail}></input>
                        <p>Webiste: <a href={bar.URL}>{bar.URL}</a></p>
                        <input placeholder={bar.URL}></input>
                        <h5>Location</h5>
                        <input placeholder={bar.lat}></input>
                        <input placeholder={bar.lng}></input>
                        <br/>
                        <button onClick={()=>this.handleEdit(bar.id)}>Edit</button>
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