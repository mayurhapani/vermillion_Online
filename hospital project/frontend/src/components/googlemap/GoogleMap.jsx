import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapContainerRef.current).setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map).bindPopup("A pretty CSS3 popup.<br> Easily customizable.").openPopup();

    // Clean up Leaflet map instance when the component unmounts
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div ref={mapContainerRef} style={{ width: "100%", height: "220px" }} />;
};

export default MapComponent;
