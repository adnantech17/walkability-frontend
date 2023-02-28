import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';


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

export default function Map() {
  const geoData = { lat: 23.73499, lng: 90.39083177 };

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={12} style={{ height: '90vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} icon={myIcon} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
}
