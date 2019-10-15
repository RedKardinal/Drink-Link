import React, {Component} from 'react';
import { connect } from 'react-redux';

class LocationList extends Component {

    render () {
        return (
            <div>
                <p>Location List</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.description,
  });

export default connect(mapStateToProps) (LocationList);