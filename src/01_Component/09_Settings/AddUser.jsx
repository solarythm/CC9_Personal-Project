import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import './Settings.css';

function AddUser() {
    return (
        <div>
            <Form className= "SettingAddUser">
                <Row>
            <h3> Add New User by type and then press submit </h3>
                </Row>
                <Row> 
                    <Form.Group as= {Col} lg= "3" className= "userAddForm"  id= "FirstName">
                    <Form.Label> First Name </Form.Label>
                    <Form.Control
                        required
                        type= "text"
                        value= {null}
                        placeholder= "John"
                        //onChange= {(e)} => setUserId(e.target.value)} 
                    />
                    </Form.Group>
                    <Form.Group as= {Col} lg= "3" className= "userAddForm"  id= "LastName">
                    <Form.Label> Last Name </Form.Label>
                    <Form.Control
                        required
                        type= "text"
                        value= {null}
                        placeholder= "Geyser"
                        //onChange= {(e)} => setUserId(e.target.value)} 
                    />
                    </Form.Group>
                    <Form.Group as= {Col} lg= "2" className= "userAddForm"  id= "age">
                    <Form.Label> Age </Form.Label>
                    <Form.Control
                        required
                        type= "text"
                        value= {null}
                        placeholder= "17"
                        //onChange= {(e)} => setUserId(e.target.value)} 
                    />
                    </Form.Group>
                    <Form.Group as= {Col} lg= "2" className= "userAddForm"  id= "staffID">
                    <Form.Label> Staff ID </Form.Label>
                    <Form.Control
                        required
                        type= "text"
                        value= {null}
                        placeholder= "ID"
                        //onChange= {(e)} => setUserId(e.target.value)} 
                    />
                    </Form.Group>
                </Row>

                <Row id= "row2"> 
                    <Form.Group as= {Col} lg= "2" className= "userAddForm"  id= "Role">
                    <Form.Label> Role </Form.Label>
                    <Form.Control
                        required
                        type= "text"
                        value= {null}
                        placeholder= "Maid"
                        //onChange= {(e)} => setUserId(e.target.value)} 
                    />
                    </Form.Group>
                    <Form.Group as= {Col} lg= "2" className= "userAddForm"  id= "Joined Date">
                    <Form.Label> Start Working From </Form.Label>
                    <Form.Control
                        required
                        type= "text"
                        value= {null}
                        placeholder= "01/01/2001"
                        //onChange= {(e)} => setUserId(e.target.value)} 
                    />
                    </Form.Group>
                    <Form.Group as= {Col} lg= "1" className= "userAddForm"  id= "status">
                    <Form.Label> Status </Form.Label>
                    <Form.Control
                        required
                        type= "text"
                        value= {null}
                        placeholder= "Active"
                        //onChange= {(e)} => setUserId(e.target.value)} 
                    />
                    </Form.Group>
                    <Form.Group as= {Col} lg= "4" className= "userAddForm"  id= "jobDescription">
                    <Form.Label> Job Description </Form.Label>
                    <Form.Control
                        required
                        type= "text"
                        value= {null}
                        placeholder= "Take care of cleaning."
                        //onChange= {(e)} => setUserId(e.target.value)} 
                    />
                    </Form.Group>
                </Row>

                <div className= "CheckOutButtonForm">           
                    <div className= "CheckOutButtonContainer">
                        <Button className= "CheckOutButton" id= "Submit" size= "lg" type= "submit" >
                            Add User
                        </Button>  
                        <Button className= "CheckOutButton" id= "Submit" size= "lg" type= "reset">
                            Reset
                        </Button>   
                    </div>  
                </div>
            </Form>
    </div>
    );
}
export default AddUser