import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 40.1976047, lng: -3.6937746 }}
    >
      <Marker
        position={{ lat: 40.1976047, lng: -3.6937746 }}
      />
    </GoogleMap>
  ));

  export default MapWithAMarker