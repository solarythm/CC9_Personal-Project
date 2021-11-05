import React from 'react';
import { Form, Button } from "react-bootstrap";
import logo from '../../04_Picture/apartment_02.jpg';
import './Login.css'


export default function Login() {


    // https://serverless-stack.com/chapters/create-a-login-page.html
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  
    // function validateForm() {
    //   return email.length > 0 && password.length > 0;
    // }
  
    // function handleSubmit(event) {
    //   event.preventDefault();

    return (
        <div className= "LoginContainer">
            <div className= "Login">
                <div className= "LogoContainer">
                    <img src= { logo }  
                    alt= "apartment pic"  
                    /> 
                </div>
                <div className= "FormContainer">
                    <Form className= "Form">
                        <Form.Group className= "formUser" size= "lg" controlID= "InputUser">
                            <Form.Label> Username </Form.Label>
                            <Form.Control
                            type= "text"
                            value= {null}
                            //onChange= {(e)} => setUserId(e.target.value)} 
                            />
                        </Form.Group>
                    
                        <Form.Group className= "formPassword" size= "lg" controlID= "InputPassword">
                            <Form.Label> Password </Form.Label>
                            <Form.Control
                            type= "password"
                            value= {null}
                            //onChange= {(e)} => setPassword(e.target.value)} 
                            />
                        </Form.Group>
                        <div className= "ButtonGroup">
                            <Button className= "buttonSubmit" size= "lg" type= "submit" >
                                Login
                            </Button>
                            <Button className= "buttonReset" variant= "danger" size= "lg" type= "reset">
                                Clear
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
