import React, {Component} from 'react';
import { connect } from 'react-redux';

class LocationEdit extends Component {

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    handleDelete = (id) => {
        console.log('Delete clicked!');
        this.props.dispatch({ type: 'DELETE_LOCATION', payload: id })
    }

    handleApprove = () => {
        console.log('Approve clicked!');  
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
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Approve</th>
                <th>Delete</th>
                </tr>
                {this.props.reduxStore.locationReducer.map((bar) => {
                    return (
                    <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.time}</td>
                        <td>{bar.detail}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                        <td>{bar.lat}</td>
                        <td>{bar.lng}</td>
                        <td><button onClick={()=>this.handleDelete(bar.id)}>Delete</button></td>
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
export default connect(mapStateToProps) (LocationEdit);