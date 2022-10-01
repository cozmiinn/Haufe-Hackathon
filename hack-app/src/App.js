import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';





function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const baseURL = "https://localhost:4000/blanao";
      const rawData = await axios.get(baseURL);

      setData(rawData);
    }
    fetchData();
  }, [])
  return (
    <>
      <h1>Haufe Hackathon</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" data={data}
        />
        <table style={{width: 500}}>
          <thead>
            <tr>
              
            </tr>
          </thead>
        </table>
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
