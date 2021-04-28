import React, { createContext,useReducer } from 'react';
import{Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import  Errorpage from"./components/Errorpage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from './components/Logoout';
//import { STATES } from 'mongoose';
import {initialState,reducer} from "../src/reducer/UseReducer";
//import { findOneAndRemove } from '../../server/model/userSchema';



//context api.. 
    
export const UserContext=createContext();





//routeing
const Routing=()=>{
    return (
        <Switch>

        <Route exact path="/">
            <Home/>
        </Route>
    
        <Route path="/about">
            <About/>
        </Route>
    
        <Route path="/contact">
            <Contact/>
        </Route>
    
        <Route path="/signin">
            <Login/>
        </Route>
    
        <Route path="/signup">
            <Signup/>
        </Route>
    
        <Route path="/logout">
            <Logout/>
        </Route>
    
        <Route>
            <Errorpage/>
        </Route>
        </Switch>
    )
}

const App =()=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    return(        
         <>
<UserContext.Provider value={{state,dispatch}}> 

    <Navbar />
    <Routing />

</UserContext.Provider>
    </>





    )
}
export default App