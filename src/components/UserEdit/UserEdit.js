import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import swal from 'sweetalert';

class UserEdit extends Component {

    componentDidMount() {
        this.getAllUser();
    } // end componentDidMount

    getAllUser = () => {
        this.props.dispatch({ type: 'FETCH_ALL_USER' })
    }

    // handleDelete = (id) => {
    //     console.log('Delete clicked!');
    //     this.props.dispatch({ type: 'DELETE_USER', payload: id })
    // }

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
                this.props.dispatch({ type: 'DELETE_USER', payload: id })
                swal("User deleted!", {
                    icon: "success",
                })
            } else {
                
            }
        })
    }
    
    render () {
        return (
            <Router>
            <div>
            <h5>Moderate Users</h5>
            <table className="striped centered highlight">
            <thead className="thead">
                <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Delete User</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.reduxStore.allUserReducer.map(user => 
                        <tr key={user.id}>
                        <td className="boldName">{user.id}</td>
                        <td>{user.username}</td>
                        <td><a onClick={()=>this.handleDelete(user.id)} className="btn-floating btn-medium waves-effect waves-light red" href="#UserEdit"><i className="material-icons right">clear</i></a></td>
                    </tr> 
                )}
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
export default connect(mapStateToProps) (UserEdit);