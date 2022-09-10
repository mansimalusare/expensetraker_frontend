import React from "react";
import { Routes,Route } from "react-router-dom";
import Delete from "./Delete";
import Edit from "./Edit";
import App from "./App";

const Routing = () =>{
    return(
            <>
            <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route exact path='/edit/:userID' element={<Edit/>}/>
            <Route exact path='/deleteitem/:userID' element={<Delete/>}/>
            </Routes>
            </>
    );

};


export default Routing;