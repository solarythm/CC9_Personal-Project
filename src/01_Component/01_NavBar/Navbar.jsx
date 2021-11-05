import React from 'react';
// import { Link } from 'react-router-dom';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navmenu() {
  


    return (
        <div>
          <div className= "NavbarContainer">
          <Navbar bg="secondary" varirant= "dark" expand="lg">
            <Container fluid>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
              >
                <Nav.Link href="/Login"> Login </Nav.Link>
                <Nav.Link href="/Overview">Overview</Nav.Link>
                <Nav.Link href="/CheckIn">Check In</Nav.Link>
                <Nav.Link href="/CheckOut">Check Out</Nav.Link>
                <Nav.Link href="/Utilities">Utilities</Nav.Link>
                <NavDropdown title="Settings">
                  <NavDropdown.Item href="/ShowUser"> Show </NavDropdown.Item>
                  <NavDropdown.Item href="/AddUser"> Add </NavDropdown.Item>
                  <NavDropdown.Item href="/ModifyUser"> Modify </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>
          </div>
        </div>
    );
}

export default Navmenu