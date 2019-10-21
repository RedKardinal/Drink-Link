import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';


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

    handleEdit = (id) => {
        console.log('Edit clicked!');  
        this.props.history.push(`/ItemLocationEdit/${id}`)
    }


    render () {
        return (
            <Router>
            <>
            <h2>Location List</h2>
            <table className="striped">
            <tbody>
                <tr>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
                {this.props.reduxStore.locationReducer.map((bar) => {
                    return (
                    <tr key={bar.id}>
                        <td>{bar.name}</td>
                        <td><a onClick={()=>this.handleEdit(bar.id)} className="btn-floating btn-medium waves-effect waves-light" ><i className="material-icons right">edit</i></a></td>
                        <td><a onClick={()=>this.handleDelete(bar.id)} className="btn-floating btn-medium waves-effect waves-light red" href="#LocationEdit"><i className="material-icons right">clear</i></a></td>
                    </tr>
                    )
                })}
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
export default connect(mapStateToProps) (LocationEdit);