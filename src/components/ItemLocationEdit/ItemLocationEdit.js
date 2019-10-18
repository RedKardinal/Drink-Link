// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
// ---- Import CSS ---- //

class ItemLocationEdit extends Component {

    state = {
        id: this.props.match.params.id,
        name: '',
        time: '',
        detail: '',
        URL: ''
    };
    
    componentDidMount() {
        console.log(this.props.match.params);
        this.props.dispatch({ type: 'FETCH_LOCATION_ID', payload: this.props.match.params });
    }
    
    handleChange = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        })
        // console.log('Edit', this.state)
    } // handles Change in input fields

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
                        <input onChange={(event) => this.handleChange('name', event)} placeholder={bar.name}></input>
                        <input onChange={(event) => this.handleChange('time', event)} placeholder={bar.time}></input>
                        <input onChange={(event) => this.handleChange('detail', event)} placeholder={bar.detail}></input>
                        <p>Webiste: <a href={bar.URL}>{bar.URL}</a></p>
                        <input onChange={(event) => this.handleChange('URL', event)} placeholder={bar.URL}></input>
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