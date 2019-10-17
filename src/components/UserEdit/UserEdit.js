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
            <table>
            <tbody>
                <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Delete User</th>
                </tr>
                {
                    this.props.reduxStore.allUserReducer.map(user => 
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td><button onClick={()=>this.handleDelete(user.id)}>Delete User</button></td>
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