import {React, useState, InputGroup} from 'react';
import './CheckIn.css'
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckIn.css';

export default function CheckIn() { 
const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};

return (
    <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Last name"
          defaultValue="Otto"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Username</Form.Label>
        {/* <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup> */}
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid city.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="Zip" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid zip.
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Form.Group className="mb-3">
      <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
      />
    </Form.Group>
    <Button type="submit">Submit form</Button>
  </Form>
                
{/* 
            <div className= "ButtonGroup">
                <Button className= "buttonSubmit" size= "lg" type= "submit" >
                    Login
                </Button>
                <Button className= "buttonReset" size= "lg" type= "reset">
                    Clear
                </Button>
            </div>
                
            <div className ="CheckInSummaryContainer">
                <div className= "CheckInSummaryKeyContainer">           
                    <div id= "Banner"> Price </div>
                    <div id= "Banner"> Advance </div>
                    <div id= "Banner"> Deposit </div>
                    <div  id= "Banner"> Total </div>
                    <div  id= "Banner"> Uncollected </div>
                </div>
                <div className= "CheckInSummaryValueContainer">
                    <div id= "BannerValue"> {price} </div>
                    <div id= "BannerValue"> {advance} </div>
                    <div id= "BannerValue"> {deposit} </div>
                    <div id= "BannerValue"> {total} </div>
                    <div id= "BannerValue"> {uncollected} </div>
                </div>
            </div>
            
             */}

        </div>
    );
}
