import React from 'react';

import './App.css';
import Button from './components/Button';
import Description from "./components/Description";
import ErrorDescription from "./components/ErrorDescription";
import Input from "./components/Input";

//сделать все вводы через компоненту и создать их через пропсы
//все подписи тоже сделать через компоненту и созадть их через пропсы передав им имя

//а потом скопировать код помещения поста и таким образом помещать текст под
//окошком, если чтото не так . и там же проверить чтобы был верный текст в полях
//
//


// function checkName(){
//
// }
//
// function checkNpi(){
//
// }
//
// function checkAddress(){
//
// }
//
// function checkPhone(){
//
// }

// function checkEmail(){
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//     {
//         return (true)
//     }
//     alert("You have entered an invalid email address!")
//     return (false)
// }

function Submit() {
    console.log("clicked2");

    //работает, но лучше бы через пропс передать или еще както
    //но уже чтото
    let error1 = document.getElementById("Error1");
    error1.descriptionText = "yoyoy";
    error1.text = "yoyoy";
    error1.innerHTML = "yoyoy";
    console.log(error1);

    let email = document.getElementById("email");
    //checkEmail();

}

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      {/*<form method="post">*/}
      <div>
        <p><Description descriptionText = "First and Last Name:"/><ErrorDescription id = "Error1" descriptionText = "Error:"/></p>
        <p><input type="text" name="name"/></p>
        <p><Description descriptionText = "NPI number:"/><ErrorDescription id = "Error2" descriptionText = "Error:"/></p>
        <p><input type="text" name="npi"/></p>
        <p><Description descriptionText = "Business Address:"/><ErrorDescription id = "Error3" descriptionText = "Error:"/></p>
        <p><input type="text" name="address"/></p>
        <p><Description descriptionText = "Telephone Number:"/><ErrorDescription id = "Error4" descriptionText = "Error:"/></p>
        <p><input type="text" name="phone"/></p>
        <p><Description descriptionText = "Email address:"/><ErrorDescription id = "Error5" descriptionText = "Error:"/></p>
        <p><input type="text" name="email"/></p>
        <p><input type="submit" /></p>
        <p><Button onClick={() => {console.log("clicked")}} >Submit</Button></p>
        <p><Button onClick={Submit} >Submit</Button></p>
        <p><input type="reset" /></p>

          {/*<p><Description descriptionText = "First and Last Name:"/><ErrorDescription id = "Error1" descriptionText = "Error:"/></p>*/}
          {/*<p><Input id="name" type="text" name="name"/></p>*/}
          {/*<p><Description descriptionText = "NPI number:"/><ErrorDescription id = "Error2" descriptionText = "Error:"/></p>*/}
          {/*<p><Input id="npi" type="text" name="npi"/></p>*/}
          {/*<p><Description descriptionText = "Business Address:"/><ErrorDescription id = "Error3" descriptionText = "Error:"/></p>*/}
          {/*<p><Input id="address" type="text" name="address"/></p>*/}
          {/*<p><Description descriptionText = "Telephone Number:"/><ErrorDescription id = "Error4" descriptionText = "Error:"/></p>*/}
          {/*<p><Input id="phone" type="text" name="phone"/></p>*/}
          {/*<p><Description descriptionText = "Email address:"/><ErrorDescription id = "Error5" descriptionText = "Error:"/></p>*/}
          {/*<p><Input id="email" type="text" name="email"/></p>*/}
          {/*<p><input type="submit" /></p>*/}
          {/*<p><Button onClick={() => {console.log("clicked")}} >Submit</Button></p>*/}
          {/*<p><Button onClick={Submit} >Submit</Button></p>*/}
          {/*<p><input type="reset" /></p>*/}
      </div>
      {/*</form>*/}
      </body>
    </div>
  );
}

export default App;
