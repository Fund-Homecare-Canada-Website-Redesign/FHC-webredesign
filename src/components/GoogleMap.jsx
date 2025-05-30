
// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// // Map styles
// const mapContainerStyle = {
//   width: '100%',
//   height: '300px',
//   borderRadius: '8px',
//   boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//   marginBottom: '1rem'
// };

// const staticMapStyle = {
//   width: '100%',
//   height: '300px',
//   objectFit: 'cover',
//   borderRadius: '8px',
//   boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//   marginBottom: '1rem'
// };

// const center = {
//   lat: 43.64360313523152,
//   lng: -79.62108298790584 // Pearl Banquet & Convention Centre
// };

// const GoogleMapComponent = ({ interactive = true }) => {
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [apiError, setApiError] = useState(false);

//   // Generate URL for static map fallback
//   const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=14&size=800x400&markers=color:red%7C${center.lat},${center.lng}&key=YOUR_API_KEY`;

//   useEffect(() => {
//     // Check if Google Maps API is already loaded
//     if (window.google && window.google.maps) {
//       setMapLoaded(true);
//     }
//   }, []);

//   if (!interactive || apiError) {
//     return (
//       <div className="map-container mb-4">
//         <img 
//           src={staticMapUrl} 
//           alt="Map location" 
//           style={staticMapStyle}
//           onError={(e) => {
//             e.target.src = '/location-placeholder.jpg';
//           }}
//         />
//         <p className="map-fallback-notice">
//           Interactive map unavailable. Here's the location:
//           <br />
//           <strong>Pearl Banquet & Convention Centre</strong>
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="map-container mb-4">
//       <LoadScript
//         googleMapsApiKey="YOUR_API_KEY" // Replace with your actual API key
//         onError={() => setApiError(true)}
//         onLoad={() => setMapLoaded(true)}
//       >
//         {mapLoaded && (
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             center={center}
//             zoom={14}
//             options={{
//               streetViewControl: false,
//               mapTypeControl: false,
//               fullscreenControl: true
//             }}
//           >
//             <Marker 
//               position={center} 
//               icon={{
//                 url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
//               }}
//             />
//           </GoogleMap>
//         )}
//       </LoadScript>
//     </div>
//   );
// };

// export default GoogleMapComponent;

// Still waiting on API key from FHC...

//Google map integration for event pages
// import React from "react";
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import colours from "../assets/styles/BrandColours";

// const mapContainerStyle = {
//     width: '100vw',
//     height: '100vh'
// };

// const center = {
//     lat: 43.64360313523152,
//     lng: -79.62108298790584 // Location set to Pearl Banquet & Convention Centre
// };

// function GoogleMapComponent() {

//     return (
//         <LoadScript
//             googleMapsApiKey="API_KEY" // Replace with API key
//         >
//             <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 center={center}
//                 zoom={10} // Sets initial zoom level
//             >
//                 <Marker position={center} />
//             </GoogleMap>

//         </LoadScript>

//     )

// }

// export default GoogleMapComponent;

const GoogleMapComponent = ({ location }) => {
    const locationQuery = encodeURIComponent(location || "Speranza Banquet Hall, Brampton")
    return (
      <div className="w-full h-[300px] rounded-lg overflow-hidden shadow">
        <iframe
          title="Event Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAKiat5oBTkox9Hs369ztp6Kx6TSIGIids&q=${locationQuery}`}
          allowFullScreen
        ></iframe>
      </div>
    )
  }
  
  export default GoogleMapComponent