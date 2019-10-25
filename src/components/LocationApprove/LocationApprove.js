import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// --- Import CSS ---- //
import './LocationApprove.css'

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
            <div>
            <h5>Approve Locations</h5>
            <table className="striped center">
            <thead className="theadAp">
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
                        <td className="boldName">{bar.name}</td>
                        <td>{bar.time}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                        <td className="padLe"><a onClick={()=>this.handleClick(bar.id)} className="btn-floating btn-medium waves-effect green" href="#LocationApprove"><i className="material-icons right">check</i></a></td>
                    </tr> 
                    ) : (
                        <tr key={bar.id}>
                        <td className="boldName">{bar.name}</td>
                        <td>{bar.time}</td>
                        <td><a href={bar.URL}>Web Link</a></td>
                        <td className="padLe"><a onClick={()=>this.handleClick(bar.id)} className="btn-floating btn-medium waves-effect waves-light red" href="#LocationApprove"><i className="material-icons right">clear</i>Not Approved</a></td>
                    </tr>    
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

export default withRouter(connect(mapStateToProps)(LocationApprove));