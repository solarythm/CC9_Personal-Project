import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navmenu from './01_Component/01_NavBar/Navbar.jsx'
import Login from './01_Component/02_login/LogIn.jsx';
import Dashboard from './01_Component/04_Dashboard/Dashboard.jsx';
import Overview from './01_Component/05_Daily/Overview.jsx';
import CheckIn from './01_Component/06_CheckIn/CheckIn.jsx'
import CheckOut from './01_Component/07_CheckOut/CheckOut.jsx';
import Utilities from './01_Component/08_UtilitiesBill/Utilities.jsx'
import Settings from './01_Component/09_Settings/Settings.jsx'
import AddUser from './01_Component/09_Settings/AddUser.jsx';
import ModifyUser from './01_Component/09_Settings/ModifyUser.jsx'



function App() {

  return (
    <>
      <div className= "bodyContainer">
        <div className= "navbarContainer">
          <Navmenu />
        </div>
        <div className= "contentContainer">
          <Switch>
            <Route exact path= "/" component= { null } />
            <Route path= "/login" component= { Login } />
            <Route path= '/dashboard' component= { Dashboard } />
            <Route path= '/overview' component= { Overview } />
            <Route path= '/checkin' component= { CheckIn } />
            <Route path= "/CheckOut" component= { CheckOut } />
            <Route path= "/Utilities" component= { Utilities } />
            <Route path= '/AddUser' component= { AddUser } />
            <Route path= '/ShowUser' component= { Settings } />
            <Route path= '/ModifyUser' component= { ModifyUser } />
          </Switch>
        </div>
      </div>
    </>
    

  );
}

export default App;


