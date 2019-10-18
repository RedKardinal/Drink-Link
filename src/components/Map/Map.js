// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { HashRouter as Router } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
// import mapStyles from "../mapStyles"

// class Map extends Component {
//     render() {
//         return (
//             <>
//             <div>Map Test</div>
//             <GoogleMap
//                 defaultZoom={15}
//                 defaultCenter={{ lat: 44.977753, lng: -93.265015 }}
//                 // defaultOptions={{ styles: mapStyles }}
//             >
//             </GoogleMap>
//             </>
//         )
//     }
// }
function Map() {
//   const [selectedBar, setSelectedBar] = useState(null);
  return (
    <GoogleMap 
    defaultZoom={15} 
    defaultCenter={{ lat: 44.977753, lng: -93.265015 }}
    // defaultOptions={{styles: mapStyles}}
    >
      {/* {barData.features.map((location) => (
        <Marker key={location.properties.barID}
          position={{
            lat: location.geometry.coordinates[1],
            lng: location.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedBar(location);
          }}
          icon={{
            url: "/vector.svg",
            scaledSize: new window.google.maps.Size(25,25)
          }}
        />
      ))}

      {selectedBar && (
        <InfoWindow
          position={{
            lat: selectedBar.geometry.coordinates[1],
            lng: selectedBar.geometry.coordinates[0]
          }}
          onCloseClick={() => {
            setSelectedBar(null);
          }}
        >
          <div>
            <h2>{selectedBar.properties.name}</h2>
            <p>{selectedBar.properties.hhTime}</p>
            <p>{selectedBar.properties.web}</p>
          </div>
        </InfoWindow> */}
      )}
    </GoogleMap>
  )
}

const DrinkLinkMap = withScriptjs(withGoogleMap(Map))

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <br />
      <DrinkLinkMap googleMapURL=
        {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
// const mapStateToProps = reduxStore => ({
//     reduxStore,
// });
// export default withRouter(connect(mapStateToProps)(Map))