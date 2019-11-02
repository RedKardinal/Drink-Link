import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import swal from 'sweetalert';

// Admin page to select location to edit or delete.
class LocationEdit extends Component {

    // Calls all location on pageload
    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    // Gets locations
    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    } // end getLocation

    // Handles all deletes for locations with confirmation on delete.
    handleDelete = (id) => {
        console.log('Delete clicked!');
        swal({
            title: "Are you sure?",
            text: "This will be permantely be deleted.",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.props.dispatch({ type: 'DELETE_LOCATION', payload: id })
                    swal("Location deleted!", {
                        icon: "success",
                    })
                } else {
                }
            })
    } // end handleDelete

    // Pushes admin to single location edit page.
    handleEdit = (id) => {
        console.log('Edit clicked!');
        this.props.history.push(`/ItemLocationEdit/${id}`)
    } // end handleEdit


    render() {
        return (
            <Router>
                <div>
                    <h5>Edit Locations</h5>
                    <table className="striped">
                        <tbody>
                            <tr className="thead">
                                <th>Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {this.props.reduxStore.locationReducer.map((bar) => {
                                return (
                                    <tr key={bar.id}>
                                        <td className="boldName">{bar.name}</td>
                                        <td><a onClick={() => this.handleEdit(bar.id)} className="btn-floating btn-medium waves-effect waves-light amber darken-1›" ><i className="material-icons right">edit</i></a></td>
                                        <td className="padLe"><a onClick={() => this.handleDelete(bar.id)} className="btn-floating btn-medium waves-effect waves-light red darken-1" href="#LocationEdit"><i className="material-icons right">clear</i></a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(LocationEdit);