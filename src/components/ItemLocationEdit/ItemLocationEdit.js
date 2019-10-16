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

    render() {
        return(
            <Router>
            <div>
                <h4>Edit Business and Location</h4>
                {this.props.reduxStore.locationIdReducer.map((bar) => {
                    return (
                    <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.time}</td>
                        <td>{bar.detail}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                        <td>{bar.lat}</td>
                        <td>{bar.lng}</td>
                        <td><button onClick={()=>this.handleEdit(bar.id)}>Edit</button></td>
                        <td><button onClick={()=>this.handleDelete(bar.id)}>Delete</button></td>
                    </tr>
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