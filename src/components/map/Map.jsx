import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import DraggableMarker from '~/components/map/DraggableMarker';

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 15);
  return null;
}

export default function Map({ selectedLocation, setSelectedLocation, show }) {
  const geoData = { lat: 23.73499, lng: 90.39083177 };
  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '100%' }}>
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
  );
}
