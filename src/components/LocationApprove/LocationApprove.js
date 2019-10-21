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
            <table className="striped center">
            <thead>
                <tr>
                <th>Name</th>
                <th>Times</th>
                <th>Website</th>
                <th>Approved?</th>
                </tr>
            </thead>    
            <tbody>    
                {
                    this.props.reduxStore.locationReducer.map(bar => bar.approve === true ? (
                        <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.time}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                        <td><a onClick={()=>this.handleClick(bar.id)} className="btn-floating btn-large waves-effect" href="#LocationApprove"><i className="material-icons right">check</i></a></td>
                    </tr> 
                    ) : (
                        <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td>{bar.time}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                        <td><a onClick={()=>this.handleClick(bar.id)} className="btn-floating btn-large waves-effect waves-light red" href="#LocationApprove"><i className="material-icons right">clear</i>Not Approved</a></td>
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