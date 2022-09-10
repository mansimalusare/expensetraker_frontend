import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import App from './App';
import  Routing from './Routing';
import {BrowserRouter} from 'react-router-dom';


reactDom.render(
    <>

        <BrowserRouter>
        <Routing></Routing>
        </BrowserRouter>
        
        
    </>,
    document.getElementById("root")
);

