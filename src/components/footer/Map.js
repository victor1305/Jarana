import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
  } from "react-google-maps";
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={19}
      defaultCenter={{ lat: 40.197565, lng: -3.693678 }}
    >
      {/* <Marker
        position={{ lat: 40.1975224, lng: -3.6936669 }}
      /> */}
    </GoogleMap>
  ));

  export default MapWithAMarker

