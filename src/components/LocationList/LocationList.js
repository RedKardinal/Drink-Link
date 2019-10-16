import React, {Component} from 'react';
import { connect } from 'react-redux';

class LocationList extends Component {

    // state = {
    //     showApproved: true
    // }

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    render () {
        // const {showApproved} = this.state;

        return (
            <>
            <h2>Location List</h2>
            <table>
            <tbody>
                <tr>
                <th>Name</th>
                <th>Happy Hour Times</th>
                <th>Website</th>
                </tr>
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
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(LocationList);