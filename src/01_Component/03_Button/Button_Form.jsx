import React from 'react';
import { Button } from "react-bootstrap";   
import './Button_Form.css'; 

export default function Button_Form() {
    return (
    <div>
        <Button size= "lg" type= "submit" >
            Login
        </Button>
        <Button size= "lg" type= "reset">
            Clear
        </Button>
    </div>
    );
} 
