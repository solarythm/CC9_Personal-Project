import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import './CheckOut.css';
import CheckOutRoom from './CheckOutRoom.jsx';
export default function CheckOut() {
    return(
        <div className= "body">
            <div className= "CheckOutContainer">
                {/* <div className= "CheckOutTopic"> 
                    <h1> Check Out </h1> 
                </div> */}
                <Row className= "CheckOutHeaders">
                        <Col lg= "3"> Apartment Name </Col>
                        <Col lg= "3"> Room Number </Col>
                        <Col lg= "2"> Deposit </Col>
                        <Col lg= "2"> Deduction </Col>
                        <Col lg= "2"> Return </Col>
                </Row>
                <div className= "CheckOutBody">
                    <CheckOutRoom />
                    <CheckOutRoom />
                    <CheckOutRoom />
                    <CheckOutRoom />
                    <CheckOutRoom />
                </div>
                <div className= "CheckOutSummary">
                    <div className= "CheckOutSummaryBanner" id= "CheckOutSummaryReturnKey">
                        Return
                    </div>
                    <div className= "CheckOutSummaryBanner" id= "CheckOutSummaryReturnValue">
                        725
                    </div>
                    <Form>
                        <div className= "DepositReturnSummaryBanner">
                            <Form.Control id= "DepositReturnValue" 
                            required 
                            size="lg" 
                            type="text" 
                            placeholder="0" /> 
                        </div>
                    </Form>
                </div>
            </div>
            <div className= "CheckOutButtonForm">           
                <div className= "CheckOutButtonContainer">
                    <Button className= "CheckOutButton" id= "Submit" size= "lg" type= "reset" >
                        Calculate
                    </Button>  
                    <Button className= "CheckOutButton" id= "Submit" size= "lg" type= "submit" onClick= "OnClickSubmit">
                        Submit
                    </Button>  
                    {/* <Button className= "CheckOutButton" id= "Reset" size= "lg" type= "reset">
                        Cancel
                    </Button> */}
                </div>  
            </div>
        </div>
    );
}