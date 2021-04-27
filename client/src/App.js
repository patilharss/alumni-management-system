import React from 'react'
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

const App =()=>{
    return(
 
         <>
    <Navbar/>

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

    <Route>
        <Errorpage/>
    </Route>
    </Switch>
    </>





    )
}
export default App