import React, {Component} from 'react';
import { connect } from 'react-redux';

class LocationEdit extends Component {

    render () {
        return (
            <div>
                Location Edit Page
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.description,
  });

export default connect(mapStateToProps) (LocationEdit);