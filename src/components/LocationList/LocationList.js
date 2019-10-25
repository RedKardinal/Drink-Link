import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// ---- Import CSS ---- //
import './LocationList.css'


class LocationList extends Component {

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    } // fetch allLocations

    render () {
        
        return (
            <div>
            <h5>Local Happy Hours</h5>
            <table className="striped center">
            <thead className="thead">
                <tr>
                <th>Name</th>
                <th>Happy Hours</th>
                <th>Website</th>
                </tr>
            </thead>
            <tbody >
                {
                    this.props.reduxStore.locationReducer.map(bar => bar.approve === true ? (
                    <tr key={bar.id}>
                        <td className="boldName">{bar.name}</td>
                        <td>{bar.time}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                    </tr> 
                    ) : (
                     null   
                    )
                )}
            </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(LocationList));