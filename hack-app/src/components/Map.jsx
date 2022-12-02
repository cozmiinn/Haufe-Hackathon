import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
// Don't forget to import Map.css, or else your map will not appear!
import './Map.css';

const Haufe = [45.75951, 21.220871];
const p1 = [45.723584, 21.208302]; //Intrarea Peru
const p2 = [45776449, 21.218092]; //Cugir - Carei
const p3 = [45.775126, 21.215653]; //Orsova - Cugir
const p4 = [45.717286, 21.195776]; //Calea Sagului - Glissando
const p5 = [45.752445, 21.218117]; //Mol Timisoara 2
const p6 = [45.733443, 21.200092];//Lacului nr. 22 bl. D36 sc. A
const p7 = [45.722352, 21.20353]; //Steaua nr. 24, bl. 47, sc. B
const p8 = [45.724744, 21.248825]; //Gavril Musicescu => Sf. Preot Alexandru Balas
const p9 = [45.762519, 21.215535]; //Dropiei #2
const p10 = [45.761786, 21.213667]; //Gheorghe Lazar

function Map() {
  return (
    <MapContainer
      center={Haufe}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      />
      <Marker
        position={Haufe}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Haufe Hackaton
        </Popup>
      </Marker>
      <Marker
        position={p1}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Intrarea Peru
        </Popup>
      </Marker>
      <Marker
        position={p2}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Cugir, Carei
        </Popup>
      </Marker>
      <Marker
        position={p3}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Orsova, Cugir
        </Popup>
      </Marker>
      <Marker
        position={p4}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Calan, Carei
        </Popup>
      </Marker>
      <Marker
        position={p5}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Calea Sagului, Glissando
        </Popup>
      </Marker>
      <Marker
        position={p6}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Mol Timisoara 2
        </Popup>
      </Marker>
      <Marker
        position={p7}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Lacului nr. 22, bl. D36, sc. A
        </Popup>
      </Marker>
      <Marker
        position={p8}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Steaua nr. 24, bl. 47, sc. B
        </Popup>
      </Marker>
      <Marker
        position={p9}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Gavril Musicescu, Sf. Preot Alexandru Balas
        </Popup>
      </Marker>
      <Marker
        position={p10}
        icon={new Icon({
          iconUrl: "/pin.svg",
          iconSize: [25, 25]
        })}
      >
        <Popup>
          Gheorghe Lazar
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;