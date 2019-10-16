import React, {Component} from 'react';
import { connect } from 'react-redux';

class LocationApprove extends Component {

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    handleClick = (id) => {
        this.props.dispatch({ type: 'APPROVE_LOCATION', payload: id })
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
                {
                    this.props.reduxStore.locationReducer.map(bar => bar.approve === true ? (
                        <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.time}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                        <td><button onClick={()=>this.handleClick(bar.id)}>Unapprove</button></td>
                    </tr> 
                    ) : (
                        <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.time}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                        <td><button onClick={()=>this.handleClick(bar.id)}>Approve Location</button></td>
                    </tr>    
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

export default connect(mapStateToProps) (LocationApprove);