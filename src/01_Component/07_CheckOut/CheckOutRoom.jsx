import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import './CheckOutRoom.css';

export default function CheckOutRoom() {
    const depositValue = 150;
    const deductionValue = 5;
    const returnValue = depositValue - deductionValue;
    return(
        <div className= "CheckOutDataContainer">
            <Row>
                <div className= "CheckOutDataInput">
                    <Form.Group as= {Col} lg = "3" className= "ReserveForm"  id= "ApartmentInputName">
                        <Form.Select>
                            <option> Apartment Name </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as= {Col} lg = "3" className= "ReserveForm"  id= "ApartmentInputRoom">
                        <Form.Select>
                            <option> Room Number </option>
                            <option value="201"> 201 </option>
                            <option value="202"> 202 </option>
                            <option value="203"> 203 </option>
                        </Form.Select>
                    </Form.Group>
                    <div>
                        <Col className= "ValueBanner" lg= "2"> {depositValue} </Col>
                    </div>
                    <div>
                        <Col className= "ValueBanner"  lg= "2"> {deductionValue} </Col>
                    </div>
                    <div>
                        <Col className= "ValueBanner"  lg= "2"> {returnValue} </Col>
                    </div>
                </div>
            </Row>             
        </div> 
    );
}
