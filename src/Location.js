import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Location() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const apiKey = "AIzaSyA9bEl5wGZ3rTxi_4clyA4l1-724wpNmY4";

  return (
    <div className="location">
      <h1>Location Details</h1>
      <div className="location-container">
        <p>Location</p>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Map content */}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Location;
