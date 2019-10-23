import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';


class LocationList extends Component {

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    render () {
        
        return (
            <Router>
            <>
            <h2>Location List</h2>
            <table className="striped center">
            <thead>
                <tr>
                <th>Name</th>
                <th>Happy Hour Times</th>
                <th>Website</th>
                </tr>
            </thead>
            <tbody >
                {
                    this.props.reduxStore.locationReducer.map(bar => bar.approve === true ? (
                    <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.time}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                    </tr> 
                    ) : (
                     null   
                    )
                )}
            </tbody>
            </table>
            </>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(LocationList);