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