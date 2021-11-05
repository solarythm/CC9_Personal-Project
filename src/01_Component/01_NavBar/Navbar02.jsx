import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



function Navbar() {


    return (
           
            <nav className= "navbar">
                 
                <Link to= '/Dashboard'> Dashboard </Link>
                <nav className= "subnav">
                    <nav className= "subnav-menu"> Daily  </nav>
                        <nav className= "subnav-content">
                            <Link to= '/CheckIn'> Check-In</Link>
                            <Link to= 'Check-Out'> Check-Out</Link>
                            <Link to= '/DailyOverview'> Overview </Link>
                        </nav>
                </nav> 
                
                <nav className= "subnav">  
                    <nav className= "subnav-menu"> Monthly  </nav>
                    <nav className= "subnav-content">
                        <Link to= '/CheckIn'> Check-In</Link>
                        <Link to= 'Check-Out'> Check-Out</Link>
                        <Link to= 'Bills'> Bills</Link>
                    </nav>
                </nav>
            
                <Link to= '/'> Settings </Link>

                <Link to= '/login'> Login </Link> 

               

            </nav>
        
    );
}

export default Navbar;