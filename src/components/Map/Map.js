import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import MapChild from '../MapChild/MapChild';
import { GoogleMap } from 'react-google-maps';
import './Map.css'


class Map extends Component {

    componentDidMount() {
        this.getLocations();
        this.renderMap();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    renderMap = () => {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&callback=initMap`)
        window.initMap = this.initMap
    }

    initMap = () => {

        // Create A Map
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        })
    }


    render () {
        return (
            <Router>
                <div id="map">
                    Test text
                    {/* <MapChild/> */}

                </div>
           </Router>
        )
    }
}

function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps) (Map);
