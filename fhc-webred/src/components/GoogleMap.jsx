//Google map integration for event pages
import React from "react";
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import colours from "../assets/styles/BrandColours";

const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
  };
  
  const center = {
    lat: 43.64360313523152,
    lng: -79.62108298790584 // Location set to Pearl Banquet & Convention Centre
  };

function GoogleMapComponent(){

    return (
        <LoadScript
        googleMapsApiKey="API_KEY" // Replace with API key
    >
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10} // Sets initial zoom level
        >
            <Marker position={center} />
        </GoogleMap>

    </LoadScript>

    )

}

export default googleMap