// import React, { Component } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import GeoCode from "react-geocode"
// import { connect } from 'react-redux';

// // import {
// //     GoogleMap,
// //     Marker,
// //     LoadScript
// // } from "react-google-maps";

// class FindLocation extends Component {
//     state = {
//         newLocation: {
//             street: '',
//             apt: '',
//             city: '',
//             state: '',
//             zipCode: ''
//         },
//         location: {
//             lat: 0,
//             lng: 0
//         }
//     }

//     handelChange = (e, propertyName) => {
//         this.setState({
//             newLocation: {
//                 ...this.state.newLocation,
//                 [propertyName]: e.target.value
//             }
//         })
//     }
//     handelClick = () => {
//         let address;
//         if (this.state.newLocation.apt === '') {
//             address = {
//                 street: this.state.newLocation.street,
//                 apt: '1',
//                 city: this.state.newLocation.city,
//                 state: this.state.newLocation.state,
//                 zipCode: this.state.newLocation.zipCode
//             }
//         } else {
//             address = this.state.newLocation
//         }
//         console.log(JSON.stringify(address));
//         GeoCode.setApiKey(process.env.REACT_APP_GOOGLE_KEY)
//         GeoCode.fromAddress(
//             JSON.stringify(address)
//         )
//             .then(result => {
//                 const { lat, lng } = result.results[0].geometry.location;
//                 this.setState({
//                     location: {
//                         lat: lat,
//                         lng: lng
//                     }
//                 });
//                 console.log(this.state.location)
//             },
//                 error => {
//                     console.error(error);
//                 }
//             );
//         console.log(this.state.newLocation)
//     }

//     setAddress = () => {
//         this.setState({
//             newLocation: {
//                 street: "137 Fairview Ave N",
//                 apt: '1',
//                 city: 'St Paul',
//                 state: 'MN',
//                 zipCode: '55104'
//             }
//         })
//     }

//     render() {
//         return (
//             <>
//                 <h1>Google maps <span onClick={this.setAddress}>API</span> search spike</h1>
//                 <p>Street:</p>
//                 <input className='street' value={this.state.newLocation.street} onChange={(e) => this.handelChange(e, 'street')} /><br />
//                 <p>Apt:</p>
//                 <input className='apt' value={this.state.newLocation.apt} onChange={(e) => this.handelChange(e, 'apt')} /><br />
//                 <p>City:</p>
//                 <input className='city' value={this.state.newLocation.city} onChange={(e) => this.handelChange(e, 'city')} /><br />
//                 <p>State:</p>
//                 <input className='state' value={this.state.newLocation.state} onChange={(e) => this.handelChange(e, 'state')} /><br />
//                 <p>Zip Code:</p>
//                 <input className='zip' value={this.state.newLocation.zipCode} onChange={(e) => this.handelChange(e, 'zipCode')} /><br />
//                 <br/>
//                 <button onClick={this.handelClick}>Find Location</button>
//                 <br />
//                 <div className="Map">
//                     <LoadScript
//                         id="script-loader"
//                         googleMapsApiKey={process.env.REACT_APP_API_KEY}
//                     >
//                         <GoogleMap
//                             className="example-map"
//                             mapContainerStyle={{
//                                 height: "400px",
//                                 width: "400px"
//                             }}
//                             zoom={15}
//                             center={{
//                                 lat: this.state.location.lat,
//                                 lng: this.state.location.lng
//                             }}
//                         >
//                             <Marker
//                                 position={{
//                                     lat: this.state.location.lat,
//                                     lng: this.state.location.lng
//                                 }}
//                             >
//                             </Marker>
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </>

//         )
//     }
// }
// const mapStateToProps = reduxState => ({
//     reduxState,
// });
// export default connect(mapStateToProps)(FindLocation);