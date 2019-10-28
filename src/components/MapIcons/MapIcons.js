import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MapIcons.css'
import Pint from '../Media/vectoraz.svg'

import {
    Marker,
    InfoWindow
} from '@react-google-maps/api';

// This component displays Icons and text windows 
// on Map component.
class MapIcons extends Component {

    state = {
        window: false
    }

    // Mounds location on pageload
    componentDidMount() {
        this.getLocations();
    } // end componentDidMount

    // Calls location to be displayed
    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }

    // Conditionally renders InfoWindow on click
    window = () => {
        this.setState({
            window: !this.state.window
        })
    }

    render() {
        return (
            <div>

                {this.props.location.approve === true ? (
                    <Marker key={this.props.location.id}
                        position={{
                            lat: Number(this.props.location.lat),
                            lng: Number(this.props.location.lng)
                        }}
                        onClick={() =>
                            this.window()
                        }
                        icon={Pint}
                    />
                ) : (null)
                }

                {this.state.window ?
                    <InfoWindow key={this.props.location.detail}
                        position={{
                            lat: Number(this.props.location.lat),
                            lng: Number(this.props.location.lng)
                        }}
                        onCloseClick={{
                        }}
                        icon={{
                            fillOpacity: 1.0,
                            strokeWeight: 0,
                            scale: 1.25,
                        }}
                    >
                        <div
                            className="bubbles"
                            style={{
                                background: `white`,
                                padding: 0,
                                margin: 0,
                                textAlign: "left"
                            }}>
                            <h6>{this.props.location.name}</h6>
                            <p>{this.props.location.time}</p>
                            <p>{this.props.location.detail}</p>
                            <h6><a href={this.props.location.URL}>Website</a></h6>

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

// Overlay view