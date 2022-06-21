import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


import {BrowserRouter} from 'react-router-dom'
// 直接把整个app包住
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.querySelector('#root'))