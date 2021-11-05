import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './Utilities.css';

export default function Utilities() {
    return ( 
        <div className= "UtilitiesContainer">
            <div className= "UtilitiesForm"> 
                <div>
                    <h1> Utilities Bill</h1>
                </div>
                <div>
                    <Form className= "UploadForm">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label size ="lg" > Update utilities bill for teenant(s) by uploading spreadsheet file. </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <div className= "ButtonGroup">
                                <Button variant="primary">Upload</Button>
                                    {' '}
                                <Button variant="danger">Reset</Button>
                        </div>
                    </Form>
                    <div className= "showSpreadsheet">
                        อยากทำให้ spreadsheet ที่ upload ไปด้านบนมาอยู่ในหน้านี้เป็นเหมือนหน้า browser ปกติเพื่อจะ add/edit data ได้
                    </div>
                </div>
            </div>
        </div>

    );
}