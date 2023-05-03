import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactStars from 'react-stars';
import Container from 'react-bootstrap/Container';
import { Button, FloatingLabel, Stack } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
const DataEntry = () => {
  const [validated, setValidated] = useState(false);
  const handle = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log('No');
    }

    setValidated(true);
  };
  const selectHandle = (event) => {
    console.log(event.currentTarget.value);
  };
  const ratingChange = () => {
    alert('okay');
  };
  return (
    <>
      <div className="main_div">
        <Container className="main_div" fluid>
          <Form
            className="form"
            noValidate
            validated={validated}
            onSubmit={handle}
          >
            <Row className="justify-content-md-center">
              <Col className="my_col" md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Obstacle Count(Parmanent)"
                >
                  <Form.Control type="number" placeholder="Number" required />
                </FloatingLabel>
              </Col>
              <Col className="my_col" md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Obstacle Count(Temporary)"
                >
                  <Form.Control
                    type="number"
                    placeholder="Your roll number"
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="my_col" md>
                <FloatingLabel controlId="floatingInputGrid" label="Hazard">
                  <Form.Control type="number" placeholder="Number" required />
                </FloatingLabel>
              </Col>
              <Col className="my_col" md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Clinliness"
                >
                  <Form.Control
                    as="select"
                    required
                    type="select"
                    onChange={selectHandle}
                  >
                    <option value="">Select one</option>
                    <option value="1">Dirty</option>
                    <option value="2">Modarete</option>
                    <option value="3">Clean</option>
                  </Form.Control>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="my_col" md>
                <Multiselect
                  id="multi"
                  isObject={false}
                  hidePlaceholder
                  placeholder="This road is safe for (Sex)"
                  options={['Male', 'Female', 'Other']}
                />
              </Col>
              <Col className="my_col" md>
                <Multiselect
                  id="multi"
                  isObject={false}
                  required
                  hidePlaceholder
                  placeholder="This road is safe for (Age)"
                  options={['5-15', '15-30', '30-60', '60+']}
                />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="my_col" md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Congesssion"
                >
                  <Form.Control type="number" placeholder="Number" required />
                </FloatingLabel>
              </Col>
              <Col className="my_col" md>
                <FloatingLabel controlId="floatingSelectGrid" label="Width">
                  <Form.Control
                    type="number"
                    placeholder="Your roll number"
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="justify-content-md-center" id="hh">
              <Col md>
                <div className="d-grid gap-2">
                  <Stack direction="horizontal" id="st">
                    <Form.Label>Rating : </Form.Label>
                    <ReactStars
                      count={5}
                      half={true}
                      onChange={ratingChange}
                      size={30}
                    ></ReactStars>
                  </Stack>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col sm={5}>
                <div className="d-grid gap-2">
                  <Button variant="outline-success" type="submit">
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default DataEntry;
