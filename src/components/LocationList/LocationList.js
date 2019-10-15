import React, {Component} from 'react';
import { connect } from 'react-redux';

class LocationList extends Component {
    // To Do List
    // Make GET call to redux/saga
    // List out Location Database for all users.
    // Import Materialize for display. 
    // Search bar fucntion
    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    render () {
        return (
            <div>
                <p>Location List</p>
                {this.props.reduxStore.locationReducer.map((bar) => {
                    return (
                    <ul key={bar.id}>
                        <p>{bar.name}</p>
                    </ul>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(LocationList);