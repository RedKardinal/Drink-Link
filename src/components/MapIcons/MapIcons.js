import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';
// import MapChild from '../MapChild/MapChild';
// import { GoogleMap } from 'react-google-maps';


import {
    GoogleMap,
    Marker,
    LoadScript,
    InfoWindow

} from '@react-google-maps/api';


class MapIcons extends Component {
    state = {
        window: false
    }

    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    window = () => {
        this.setState({
            window: !this.state.window
        })
    }

    render() {
        return (
            <div>
                <Marker key={this.props.location.id}
                    position={{
                        lat: Number(this.props.location.lat),
                        lng: Number(this.props.location.lng)
                    }}
                    onClick={() =>
                        this.window()
                    }

                />
                )
                            })}{this.state.window ?
                    <InfoWindow key={this.props.location.id}
                        position={{
                            lat: Number(this.props.location.lat),
                            lng: Number(this.props.location.lng)
                        }}
                        onCloseClick={{
                        }}
                    >
                        <div style={{
                            background: `white`,
                            border: `1px solid #ccc`,
                            padding: 5
                        }}>
                            <p>InfoWindow</p>
                        </div>
                    </InfoWindow>
                    :
                    ""
                }
            </div >
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(MapIcons);