import React from 'react';
// import Map from './components/Map';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// TODO: start here

function App() {
  return (
    <>
      <h1>Haufe Hackathon</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.10]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
