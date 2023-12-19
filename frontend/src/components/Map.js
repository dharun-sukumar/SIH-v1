import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from "react-router-dom";

function Map() {
    const location = useLocation();
    let polygonData;
    console.log('Location state:', location.state.polygonData.data.polygon);
    if (location.state) {
        polygonData = location.state.polygonData.data.polygon;
    } else {
        polygonData = null;
    }


    const position = [51.505, -0.09]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
}

export default Map;