import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { formatLatLng } from '~/services/api/utils';
const MapWithNoSSR = dynamic(() => import('~/components/map/Map'), {
  ssr: false,
});

const Index = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [randomLocation, setRandomLocation] = useState(null);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('random');

  const handleStartingClick = () => {
    if (!show) {
      setShow(true);
      setSelected('start');
    } else {
      setSelected('random');
      setShow(false);
    }
  };

  const handleEndingClick = () => {
    if (!show) {
      setShow(true);
      setSelected('end');
    } else {
      setSelected('random');
      setShow(false);
    }
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          zIndex: 1000,
          top: '150px',
          left: '30px',
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <InputGroup className="p-3">
          <FormControl
            readOnly
            placeholder="Start Location"
            value={formatLatLng(startLocation)}
          />
          <Button variant="primary" onClick={handleStartingClick}>
            {show && selected === 'start' ? 'Done' : 'Select'}
          </Button>
        </InputGroup>
        <InputGroup className="p-3 pt-0">
          <FormControl
            readOnly
            placeholder="End Location"
            value={formatLatLng(endLocation)}
          />
          <Button variant="primary" onClick={handleEndingClick}>
            {show && selected === 'end' ? 'Done' : 'Select'}
          </Button>
        </InputGroup>
      </div>
      <MapWithNoSSR
        show={show}
        selectedLocation={
          selected === 'random'
            ? randomLocation
            : selected === 'start'
            ? startLocation
            : endLocation
        }
        setSelectedLocation={
          selected === 'random'
            ? setRandomLocation
            : selected === 'start'
            ? setStartLocation
            : setEndLocation
        }
      />
    </div>
  );
};

export default Index;
