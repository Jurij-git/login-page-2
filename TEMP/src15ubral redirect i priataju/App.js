import React from 'react';
import './App.css';
import ProfileContainer from "./ProfileContainer";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileRegisteredContainer from "./ProfileRegisteredContainer";

function App() {

  return (
      <div>
          {/*<Route path='/welcome' render={ () => <ProfileContainer/> }/>*/}
          {/*<Route path='/registered' render={ () => <ProfileRegisteredContainer/> }/>*/}

          <ProfileContainer/>
          <ProfileRegisteredContainer/>

      </div>

    //  <ProfileContainer/>


    // <div className="App">
    //   <header className="App-header">
    //
    //   </header>
    //   <body>
    //   <div>
    //     <p><Description descriptionText = "First and Last Name:"/></p>
    //     <p><input id = "name" type="text" name="name"/></p>
    //     <p><Description descriptionText = "NPI number:"/></p>
    //     <p><input id = "npi" type="text" name="npi"/></p>
    //     <p><Description descriptionText = "Business Address:"/></p>
    //     <p><input id = "address" type="text" name="address"/></p>
    //     <p><Description descriptionText = "Telephone Number:"/></p>
    //     <p><input id = "phone" type="text" name="phone"/></p>
    //     <p><Description descriptionText = "Email address:"/></p>
    //     <p><input id = "email" type="text" name="email"/></p>
    //     <p><Button onClick={Submit} >Submit</Button></p>
    //   </div>
    //   <footer className="App-footer">
    //   </footer>
    //   </body>
    // </div>
  );
}

export default App;
