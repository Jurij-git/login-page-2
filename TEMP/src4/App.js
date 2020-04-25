import React from 'react';

import './App.css';
import Button from './components/Button';
import Description from "./components/Description";
import Input from "./components/Input";

//сделать все вводы через компоненту и создать их через пропсы
//все подписи тоже сделать через компоненту и созадть их через пропсы передав им имя

//а потом скопировать код помещения поста и таким образом помещать текст под
//окошком, если чтото не так . и там же проверить чтобы был верный текст в полях
//
//




// function checkEmail(email){
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
//     {
//         return (true);
//     }
//     alert("You have entered an invalid email address!")
//     return (false);
// }



// function validateAddress(address) {
//     let illegalChars = [',', '#', '-', '/', " ",
//         '!', '@', '$', "%",  '^',
//         '*', '(', ")", "{",  '}',
//         '|', '[', "]" , "\\"];
//
//     for(let i = 0; i < illegalChars.length; i++) {
//         if(address == illegalChars[i]) return true;
//     }
//     return false;
// }

function validateName(name)   //return true if passed
{
    let named = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(name.value.match(named))
    {
        return true;
    }
    else
    {
        alert("Wrong name!");
        return false;
    }
}

function validateAddress(address)   //return true if passed
{
    let addressd = /^[a-zA-Z0-9\s,'-]*$/;
    if(address.value.match(addressd))
    {
        return true;
    }
    else
    {
        alert("Wrong address!");
        return false;
    }
}

function validatePhone(phone)   //return true if passed
{
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.value.match(phoneno))
    {
        return true;
    }
    else
    {
        alert("Wrong phone number!");
        return false;
    }
}

function validateEmail(email)   //return true if passed
{
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailFormat))
    {
        email.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function validateAll(name,npi,address,phone,email)  //return true if passed
{
    if((email.value == "")||(npi.value == "")||(address.value == "")||(phone.value == "")||(email.value == ""))
    {
        alert("All fields are mandatory!");
        return false;
    }
    else
    {
        return true;
    }
}

let personData =  { "name":"", "npi":"", "address":"", "phone":"", "email":""};

function saveData(name,npi,address,phone,email)
{
    personData.name = name.value;
    personData.npi = npi.value;
    personData.address = address.value;
    personData.phone = phone.value;
    personData.email = email.value;
}

function Submit() {
    let name = document.getElementById("name");
    console.log(name);

    let npi = document.getElementById("npi");
    console.log(npi);

    let address = document.getElementById("address");
    console.log(address)

    let phone = document.getElementById("phone");
    console.log(phone);

    let email = document.getElementById("email");
    console.log(email);

    if(
        validateAll(name,npi,address,phone,email) &&
        validateName(name) &&
        validateAddress(address) &&
        validatePhone(phone) &&
        validateEmail(email)
    )
    {
        console.log(personData);
        saveData(name,npi,address,phone,email);
        console.log(personData);
        alert("Registration successful, please confirm to redirect");
    }
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/*<body>*/}
      <div>
        <p><Description descriptionText = "First and Last Name:"/></p>
        <p><input id = "name" type="text" name="name"/></p>
        <p><Description descriptionText = "NPI number:"/></p>
        <p><input id = "npi" type="text" name="npi"/></p>
        <p><Description descriptionText = "Business Address:"/></p>
        <p><input id = "address" type="text" name="address"/></p>
        <p><Description descriptionText = "Telephone Number:"/></p>
        <p><input id = "phone" type="text" name="phone"/></p>
        <p><Description descriptionText = "Email address:"/></p>
        <p><input id = "email" type="text" name="email"/></p>
        <p><Button onClick={Submit} >Submit</Button></p>
      </div>
      <footer className="App-footer">
      </footer>
      {/*</body>*/}
    </div>
  );
}

export default App;
