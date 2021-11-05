import {React} from 'react';
import './CheckIn.css'
import {Form, Button, Row, Col} from 'react-bootstrap';


export default function CheckIn() {

    const price = 1000;
    const advance = 500;
    const deposit = 100;
    let total = price + advance + deposit;
    let uncollected = total - advance;

    return(
        <div>
            {/* <div className= "ProcessBanner"> <h2> Booking </h2> </div> */}
            <div className= "GuestDataContainer">
                <Form class= "GuestDataForm">
                    <div className= "GuestDataInput" >
                        <Row>
                            <Form.Group as= {Col} lg="6" class= "GuestDataName" size= "lg" id= "InputName">
                                <Form.Label> Name </Form.Label>
                                <Form.Control className= "GuestDataNameInput"
                                    required
                                    type= "text"
                                    value= {null}
                                    //onChange= {(e)} => setUserId(e.target.value)}
                                    placeholder= "First Name"
                                />
                            </Form.Group>
                            <Form.Group as= {Col} lg="6" class= "GuestDataLastName" size= "lg" id= "InputLastname">
                                <Form.Label> Last Name </Form.Label>
                                <Form.Control className= "GuestDataLastNameInput"
                                    required
                                    type= "text"
                                    value= {null}
                                    //onChange= {(e)} => setUserId(e.target.value)} 
                                    placeholder= "Last Name"
                                />
                            </Form.Group>
                        </Row>
                    </div>
                    <div className= "GuestDataInput">        
                        <Row>
                            <Form.Group as= {Col} lg= "6" className= "ReserveForm"  id= "InputIDCard">
                                <Form.Label> National ID/Passport: </Form.Label>
                                <Form.Control className= "GuestDataIDInput"
                                    required
                                    type= "text"
                                    value= {null}
                                    placeholder= "1100500748951"
                                    //onChange= {(e)} => setUserId(e.target.value)} 
                                />
                            </Form.Group>

                            <Form.Group as= {Col} lg= "6" className= "ReserveForm"  id= "InputTelephone">
                                <Form.Label> Telephone Number </Form.Label>
                                <Form.Control className= "GuestDataTelNumberInput"
                                    required
                                    type= "text"
                                    value= {null}
                                    placeholder= "081-111-1111"
                                    //onChange= {(e)} => setUserId(e.target.value)} 
                                />
                            </Form.Group>
                        </Row>
                    </div>

                    <div className= "GuestDataInput">        
                        <Row>
                            <Form.Group as= {Col} lg= "6" className= "ReserveForm"  id= "InputIDCard">
                                <Form.Label> Check-In Date </Form.Label>
                                <Form.Control className= "GuestDataIDInput"
                                    required
                                    type= "text"
                                    value= {null}
                                    placeholder= "01/01/2021"
                                    //onChange= {(e)} => setUserId(e.target.value)} 
                                />
                            </Form.Group>

                            <Form.Group as= {Col} lg= "6" className= "ReserveForm"  id= "InputTelephone">
                                <Form.Label> Check-Out Date </Form.Label>
                                <Form.Control className= "GuestDataTelNumberInput"
                                    required
                                    type= "text"
                                    value= {null}
                                    placeholder= "03/01/2021"
                                    //onChange= {(e)} => setUserId(e.target.value)} 
                                />
                            </Form.Group>
                        </Row>
                    </div>

                    <div className= "GuestDataInput">        
                        <Row>
                            <Form.Group as= {Col} lg= "4" className= "ReserveForm"  id= "InputIDCard">
                                <Form.Label> Day(s) of Stay: </Form.Label>
                                <Form.Control
                                    required
                                    type= "text"
                                    value= {null}
                                    placeholder= "1"
                                    //onChange= {(e)} => setUserId(e.target.value)} 
                                />
                            </Form.Group>

                            <Form.Group as= {Col} lg= "4" className= "ReserveForm"  id= "InputTelephone">
                                <Form.Label> Number of Room(s) </Form.Label>
                                <Form.Control
                                    required
                                    type= "text"
                                    value= {null}
                                    placeholder= "1"
                                    //onChange= {(e)} => setUserId(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group as= {Col} lg = "4" className= "ReserveForm"  id= "ApartmentInputRoom">
                                <Form.Label className= "DropdownLabel"> Room Number </Form.Label>
                                <Form.Select>
                                    <option> Room Number </option>

                                    <option value="201"> 201 </option>
                                    <option value="202"> 202 </option>
                                    <option value="203"> 203 </option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </div>
                    
                    <div className= "GuestDataInput">
                        <Row>
                            <Form.Group as= {Col} lg = "4" className= "ReserveForm"  id= "ApartmentInputName">
                                <Form.Label className= "DropdownLabel"> Type of Stay </Form.Label>
                                <Form.Select> 
                                    <option> Type of Stay </option>
                                    <option value="1">Short</option>
                                    <option value="2">Long</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as= {Col} lg = "4" className= "ReserveForm"  id= "ApartmentInputName">
                                <Form.Label className= "DropdownLabel"> Apartment Name </Form.Label>
                                <Form.Select>
                                    <option> Apartment Name </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as= {Col} lg= "4" controlId="formHorizontalCheck">
                                    <Form.Label> Rented Appliance(s) </Form.Label>
                                    <Form.Check label="Fridge (200THB/mo.)"/>
                                    <Form.Check label="TV (300THB/mo.)"/>
                                </Form.Group>
                        </Row>
                    </div>
                    <div className= "GuestDataInput">
                        <Row>
                            <Form.Group as= {Col} lg= "8"  controlId="formFile">
                                <Form.Label> Upload ID Picture</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>                                                 
                        </Row>
                    </div>
                   
                    <div className= "ButtonGroup">
                        <Button class="btn btn-primary" size= "lg" type= "submit" >
                            Book
                        </Button>
                        <Button class="btn btn-danger" size= "lg" type= "reset">
                            Clear
                        </Button>
                    </div>  

                </Form>

            </div>
            <div id= "ContentBreaker">
                <h2> Summary </h2>
                <h4> (comment) หน้านี้ต้องการให้เป็น popup แต่ยังทำไม่สำเร็จ โดยหลังกด CheckIn โดยขึ้นมาเพื่อให้กรอกจำนวนเงินที่จ่ายไปก่อน (advance) และเงินมัดจำกุญแจ (deposit) </h4>
            </div>
                 
                <div className ="CheckInSummaryContainer">
                    <div className= "CheckInSummaryKeyContainer">    
                        <div className= "Banner" id= "TotalBanner"> Total </div>       
                        <div className= "Banner"  id= "AdvanceBanner"> Advance </div>
                        <div className= "Banner"  id= "DepositBanner"> Deposit </div>
                        <div className= "Banner"   id= "UncollectedBanner"> Uncollected </div>

                    </div>
                <Form>
                    <div className= "CheckInSummaryValueContainer">
                      
                        <div className= "Banner"  id= "BannerTotalValue"> {total} </div>
                        <div className= "Banner"  id= "BannerAdvanceValue"> 
                            <Form.Control className= "BannerForm"
                            required
                            type= "text"
                            value= {null}
                            placeholder= "Advance"
                            />
                        </div>
                        <div className= "Banner"  id= "BannerDepositValue"> 
                            <Form.Control className= "BannerForm"
                                required
                                type= "text"
                                value= {null}
                                placeholder= "Deposit"
                                />
                        </div>
                        <div className= "Banner"  id= "BannerUncollectedValue"> {uncollected} </div>
                     
                    </div>
                    </Form>
                </div>

                <div className= "ButtonGroup">
                        <Button class="btn btn-primary" size= "lg" type= "submit" >
                            Submit
                        </Button>
                        <Button class="btn btn-danger" size= "lg" type= "reset">
                            Back
                        </Button>
                </div>  

               
            {/* <div className= "ButtonGroup">
                <Button className= "buttonSubmit" size= "lg" type= "submit" onclick= "" >
                    Submit
                </Button>
                <Button className= "buttonReset" size= "lg" type= "reset">
                    Cancel
                </Button>
            </div>   */}
        </div>
                        
    );
}