import React, {Component} from 'react';
import { connect } from 'react-redux';

class UserEdit extends Component {

    componentDidMount() {
        this.getAllUser();
    } // end componentDidMount

    getAllUser = () => {
        this.props.dispatch({ type: 'FETCH_ALL_USER' })
    }

    handleDelete = (id) => {
        console.log('Delete clicked!');
        this.props.dispatch({ type: 'DELETE_USER', payload: id })
    }
    
    render () {
        return (
            <div>
            <table className="striped centered highlight">
            <thead>
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
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td><a onClick={()=>this.handleDelete(user.id)} className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons right">clear</i></a></td>
                    </tr> 
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
export default connect(mapStateToProps) (UserEdit);