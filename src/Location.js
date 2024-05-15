import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";

function Location() {
  const [mapKey, setMapKey] = useState(0);
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const apiKey = "AIzaSyA9bEl5wGZ3rTxi_4clyA4l1-724wpNmY4";

  const handleReloadMap = () => {
    setMapKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    handleReloadMap();
  }, []);

  return (
    <div className="location">
      <h1>Location Details</h1>
      <div className="location-container">
        <p>Location</p>
        <LoadScript googleMapsApiKey={apiKey} key={mapKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          />
        </LoadScript>
      </div>
    </div>
  );
}

export default Location;
