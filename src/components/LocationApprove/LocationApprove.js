import React, {Component} from 'react';
import { connect } from 'react-redux';

class LocationApprove extends Component {

    render () {
        return (
            <div>
                Location Approve Page
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.description,
  });

export default connect(mapStateToProps) (LocationApprove);