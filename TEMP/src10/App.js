import React from 'react';

import './App.css';
import ProfileContainer from "./ProfileContainer";



//
// function validateAll(name,npi,address,phone,email)  //return true if passed
// {
//     if((email.value == "")||(npi.value == "")||(address.value == "")||(phone.value == "")||(email.value == ""))
//     {
//         alert("All fields are mandatory!");
//         return false;
//     }
//     else
//     {
//         return true;
//     }
// }
//
// let personData =  { "name":"", "npi":"", "address":"", "phone":"", "email":""};
//
// function saveData(name,npi,address,phone,email)
// {
//     personData.name = name.value;
//     personData.npi = npi.value;
//     personData.address = address.value;
//     personData.phone = phone.value;
//     personData.email = email.value;
// }
//
// function Submit() {
//     let name = document.getElementById("name");
//     console.log(name);
//
//     let npi = document.getElementById("npi");
//     console.log(npi);
//
//     let address = document.getElementById("address");
//     console.log(address)
//
//     let phone = document.getElementById("phone");
//     console.log(phone);
//
//     let email = document.getElementById("email");
//     console.log(email);
//
//     if(
//         validateAll(name,npi,address,phone,email) &&
//         validateNpi(npi) &&
//         validateName(name) &&
//         validateAddress(address) &&
//         validatePhone(phone) &&
//         validateEmail(email)
//     )
//     {
//         console.log(personData);
//         saveData(name,npi,address,phone,email);
//         console.log(personData);
//         alert("Registration successful, please confirm to redirect");
//     }
// }

function App() {

  return (
      <ProfileContainer/>


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
