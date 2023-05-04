import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import DraggableMarker from '~/components/map/DraggableMarker';

const myIcon = new L.Icon({
  iconUrl: '/images/marker.png',
  iconRetinaUrl: '/images/marker.png',
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 15);
  return null;
}

export default function Map({ selectedLocation, setSelectedLocation, show }) {
  const geoData = { lat: 23.73499, lng: 90.39083177 };

  const center = [geoData.lat, geoData.lng];

  return (
    <div>
      <MapContainer center={center} zoom={13} style={{ height: '90vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          show={show}
        />
        {/* <ChangeView coords={center} /> */}
      </MapContainer>
    </div>
  );
}
