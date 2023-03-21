import { React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactStars from 'react-stars'
import Container from 'react-bootstrap/Container';
import Rating from 'react-rating';
import { Button, FloatingLabel, Stack } from 'react-bootstrap';
const DataEntry = () => {
  const [validated, setValidated] = useState(false);
  const [name,setName] = useState('')
  const [roll,setRoll] = useState(0)
  const [tobstackle,setTObstacke] = useState(-1)
  const [pobstackle,setPObstacke] = useState(-1)
  const [form, setForm] = useState()
  const handle = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log('No')
    }

    setValidated(true);
  }
  const selectHandle = (event) => {
    console.log(event.currentTarget.value)
  }
  const ratingChange = (e) => {
    alert('okay')
  }
  return (
    <>
      <div className='main_div'>

        <Container className='main_div' fluid>
          <Form className='form' noValidate validated={validated} onSubmit={handle}>
            <Row className="justify-content-md-center">
              <Col className='my_col' md>
                <FloatingLabel controlId="floatingInputGrid" label="Name">
                  <Form.Control type="text" placeholder='Your name' required />
                  <Form.Control.Feedback type='invalid'>Please provide your name</Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col className='my_col' md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Roll Number."
                >
                  <Form.Control type='number' placeholder="Your roll number" required />
                  <Form.Control.Feedback type='invalid'>Please provide your roll Number</Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className='my_col' md>
                <FloatingLabel controlId="floatingInputGrid" label="Obstacle Count(Parmanent)">
                  <Form.Control type="number" placeholder='Number' required />
                </FloatingLabel>
              </Col>
              <Col className='my_col' md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Obstacle Count(Temporary)"
                >
                  <Form.Control type='number' placeholder="Your roll number" required />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className='my_col' md>
                <FloatingLabel controlId="floatingInputGrid"
                  label="Hazard">
                  <Form.Control type="number" placeholder='Number' required />
                </FloatingLabel>
              </Col>
              <Col className='my_col' md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Clinliness"
                >
                  <Form.Control as='select' required type='select' onChange={selectHandle}>
                    <option value=''>Select one</option>
                    <option value='1'>Dirty</option>
                    <option value='2'>Modarete</option>
                    <option value='3'>Clean</option>
                  </Form.Control>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className='my_col' md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Safty according to Sex"
                >
                  <Form.Control as='select' type='select' multiple>
                    <option value='1'>Male</option>
                    <option value='2'>Female</option>
                    <option value='3'>Other</option>
                  </Form.Control>
                </FloatingLabel>
              </Col>
              <Col className='my_col' md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Safty according to Age"
                >
                  <Form.Control as='select' type='select' multiple >

                    <option value='1'>5-20</option>
                    <option value='2'>20-40</option>
                    <option value='3'>40+</option>
                  </Form.Control>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col className='my_col' md>
                <FloatingLabel controlId="floatingInputGrid" label="Congesssion">
                  <Form.Control type="number" placeholder='Number' required />
                </FloatingLabel>
              </Col>
              <Col className='my_col' md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Width"
                >
                  <Form.Control type='number' placeholder="Your roll number" required />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="justify-content-md-center" id='hh'>
              <Col sm={2} md>
                <Stack direction='horizontal'>
                  <Form.Label>Rating : </Form.Label>
                  <ReactStars count={5} half={true} onChange={ratingChange} size={30}></ReactStars>
                </Stack>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col sm={5}>

                <div className="d-grid gap-2">
                  <Button variant="outline-success" type='submit'>
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  )
}

export default DataEntry;