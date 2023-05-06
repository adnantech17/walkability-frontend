import dynamic from 'next/dynamic';
import { useState } from 'react';
import {
  Button,
  Col,
  FormControl,
  Modal,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { formatLatLng } from '~/utils/formatter';
import styles from '~/components/authModal/AuthModal.module.scss';
import TextInput from '~/components/form/input/TextInput';
import SelectInput from '~/components/form/input/SelectInput';
const MapWithNoSSR = dynamic(() => import('~/components/map/Map'), {
  ssr: false,
});

const Index = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [randomLocation, setRandomLocation] = useState(null);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('random');
  const [showModal, setShowModal] = useState(false);

  const { register, getValue, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // replace with your submit function
    setShowModal(false);
  };

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
          maxWidth: '300px',
          background: 'rgba(0, 0, 0, 0.5)',
        }}
        className="desktopOnly"
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
        <InputGroup className="p-3 pt-0 pb-0">
          <FormControl
            readOnly
            placeholder="End Location"
            value={formatLatLng(endLocation)}
          />
          <Button variant="primary" onClick={handleEndingClick}>
            {show && selected === 'end' ? 'Done' : 'Select'}
          </Button>
        </InputGroup>
        <Form onSubmit={handleSubmit(onSubmit)} className="p-3 pt-0">
          <Row>
            <Col md={6}>
              <TextInput
                label="Width"
                name="width"
                type="number"
                defaultValue=""
                register={register}
              />
            </Col>
            <Col md={6}>
              <TextInput
                label="Obstacle Count"
                name="obstacle_count"
                type="number"
                defaultValue=""
                register={register}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <SelectInput
                label="Cleanliness"
                name="cleanliness"
                options={[
                  { value: null, label: '' },
                  { value: 1, label: '1' },
                  { value: 2, label: '2' },
                  { value: 3, label: '3' },
                  { value: 4, label: '4' },
                  { value: 5, label: '5' },
                ]}
                defaultValue=""
                register={register}
              />
            </Col>

            <Col md={6}>
              <SelectInput
                label="Congestion"
                name="congestion"
                options={[
                  { value: null, label: '' },
                  { value: 1, label: 'Low' },
                  { value: 2, label: 'Medium' },
                  { value: 3, label: 'High' },
                ]}
                defaultValue=""
                register={register}
              />
            </Col>
          </Row>
          <SelectInput
            label="Safety"
            name="safety"
            options={[
              { value: null, label: '' },
              { value: 1, label: 'Low' },
              { value: 2, label: 'Medium' },
              { value: 3, label: 'High' },
            ]}
            defaultValue=""
            register={register}
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'rgba(0, 0, 0, 0.1)' }}>
          <div>
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
            <InputGroup className="p-3 pt-0 pb-0">
              <FormControl
                readOnly
                placeholder="End Location"
                value={formatLatLng(endLocation)}
              />
              <Button variant="primary" onClick={handleEndingClick}>
                {show && selected === 'end' ? 'Done' : 'Select'}
              </Button>
            </InputGroup>
            <Form onSubmit={handleSubmit(onSubmit)} className="p-3 pt-0">
              <Row>
                <Col md={6}>
                  <TextInput
                    label="Width"
                    name="width"
                    type="number"
                    defaultValue=""
                    register={register}
                  />
                </Col>
                <Col md={6}>
                  <TextInput
                    label="Obstacle Count"
                    name="obstacle_count"
                    type="number"
                    defaultValue=""
                    register={register}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <SelectInput
                    label="Cleanliness"
                    name="cleanliness"
                    options={[
                      { value: null, label: '' },
                      { value: 1, label: '1' },
                      { value: 2, label: '2' },
                      { value: 3, label: '3' },
                      { value: 4, label: '4' },
                      { value: 5, label: '5' },
                    ]}
                    defaultValue=""
                    register={register}
                  />
                </Col>

                <Col md={6}>
                  <SelectInput
                    label="Congestion"
                    name="congestion"
                    options={[
                      { value: null, label: '' },
                      { value: 1, label: 'Low' },
                      { value: 2, label: 'Medium' },
                      { value: 3, label: 'High' },
                    ]}
                    defaultValue=""
                    register={register}
                  />
                </Col>
              </Row>
              <SelectInput
                label="Safety"
                name="safety"
                options={[
                  { value: null, label: '' },
                  { value: 1, label: 'Low' },
                  { value: 2, label: 'Medium' },
                  { value: 3, label: 'High' },
                ]}
                defaultValue=""
                register={register}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      <div style={{ height: '90vh', position: 'relative' }}>
        <Button
          onClick={() => {
            setShowModal(true);
          }}
          style={{ position: 'absolute', right: 10, top: 10, zIndex: 2 }}
          className="mobileOnly"
        >
          Filter
        </Button>
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
    </div>
  );
};

export default Index;
