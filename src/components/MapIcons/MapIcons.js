import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Marker,
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
                
                { this.props.location.approve === true ? (
                <Marker key={this.props.location.id}
                    position={{
                        lat: Number(this.props.location.lat),
                        lng: Number(this.props.location.lng)
                    }}
                    onClick={() =>
                        this.window()
                    }

                />
                ) : ( null )
                }
                            
                            {this.state.window ?
                    <InfoWindow key={this.props.location.id}
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
                            path: './vector.svg'
                        }}
                    >
                        <div style={{
                            background: `white`,
                            // border: `1px solid #ccc`,
                            padding: 5
                        }}>
                            <h6>{this.props.location.name}</h6>
                            <p>{this.props.location.time}</p>
                            <p><a href={this.props.location.URL}>Website</a></p>
                            
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