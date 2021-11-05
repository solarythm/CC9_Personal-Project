import {React} from 'react';
import {Form, Button} from 'react-bootstrap';

export default function AlertSummary() {
    
    const price = 1000;
    const advance = 500;
    const deposit = 100;
    let total = price + advance + deposit;
    let uncollected = total - advance;


    return (
        <div>
            <h2> Summary </h2> 
            <div className ="CheckInSummaryContainer">
                <div className= "CheckInSummaryKeyContainer">    
                    <div className= "Banner" id= "TotalBanner"> Total </div>       
                    <div className= "Banner"  id= "AdvanceBanner"> Advance </div>
                    <div className= "Banner"  id= "DepositBanner"> Deposit </div>
                    <div className= "Banner"   id= "UncollectedBanner"> Uncollected </div>

                </div>
                <div className= "CheckInSummaryValueContainer">
                    <Form>
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
                    </Form>
                </div>
            </div>
        <div className= "ButtonGroup">
            <Button className= "buttonSubmit" size= "lg" type= "submit" onclick= "" >
                Submit
            </Button>
            <Button className= "buttonReset" size= "lg" type= "reset">
                Cancel
            </Button>
        </div>
    </div>  
    );
}