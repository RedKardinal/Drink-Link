import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import MapChild from '../MapChild/MapChild';
import { GoogleMap } from 'react-google-maps';


class Map extends Component {

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }


    render () {
        return (
            <Router>
                <div>
                    <MapChild/>
                </div>
           </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps) (Map);
