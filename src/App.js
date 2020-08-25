import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Bas from './components/bas/bas.jsx';
import Navb from './components/navb/navb.jsx';
import Profile from './components/profile/profile.jsx';
import Operations from './components/operations/operations.jsx';
import Angime from './components/angime/angime.jsx';
function App(props) {
  return (
    <BrowserRouter>
    <div className='ap-wrapper' >
      <Bas/>
      <Navb
      del={props.del} />

      <div className='ap-w-content'>
        <Route path="/angime" render={() => <Angime profilePage={props.state.profilePage}   table={props.state.table} dispatch={props.dispatch} del={props.del} />}/>
        <Route path="/profile" render={() => <Profile
          profilePage={props.state.profilePage}   table={props.state.table} dispatch={props.dispatch} del={props.del}/>}/>
          <Route path="/operations" render={() => <Operations
            profilePage={props.state.profilePage}   table={props.state.table} dispatch={props.dispatch} del={props.del}/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
