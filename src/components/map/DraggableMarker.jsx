import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Marker, Popup, useMap, useMapEvents } from 'react-leaflet';

const myIcon = new L.Icon({
  iconUrl: '/images/marker.png',
  iconRetinaUrl: '/images/marker.png',
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

function DraggableMarker({ show, selectedLocation, setSelectedLocation }) {
  // Get access to the Leaflet map object using the useMap hook
  const map = useMapEvents({
    drag: (e) => {
      console.log(e.target.getCenter());
      setSelectedLocation(e.target.getCenter());
    },
  });

  useEffect(() => {
    if (show) {
      setSelectedLocation(map.getCenter());
    }
  }, [show]);

  return show && selectedLocation ? (
    <Marker position={selectedLocation} icon={myIcon}>
      <Popup minWidth={90}>Hello Marker</Popup>
    </Marker>
  ) : (
    <></>
  );
}

export default DraggableMarker;
