import React, {Component} from 'react';
import { connect } from 'react-redux';

class LocationApprove extends Component {

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    render () {
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
                {this.props.reduxStore.locationReducer.map((bar) => {
                    return (
                    <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.time}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                    </tr>
                    )
                })}
            </tbody>
            </table>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps) (LocationApprove);