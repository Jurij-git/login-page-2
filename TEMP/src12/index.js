import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./reduxStore";
import {Provider} from "react-redux";

import {HashRouter, Route} from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App store={store}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
    ,document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
