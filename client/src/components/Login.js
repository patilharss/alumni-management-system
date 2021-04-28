import React,{useContext, useState} from 'react'
import alumni from "../images/alumni1.jpg"
import { NavLink, useHistory } from 'react-router-dom'
import {UserContext} from '../App';

window.alert = function() {};

const Login =()=>{


    const {state,dispatch}=useContext(UserContext);





    const history=useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');


    const loginUser=async (e)=>{
        e.preventDefault();
        const res=await fetch('/signin',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password

            })
        });

        const data=res.json();

        if(res.status===400||!data){
            window.alert("Invalid credential")
        }else{
            dispatch({type:'USER',payload:true})
            history.push('/')

        }
    }


    return(
   <>
   <section className="sign-in">
            <div className="container mt-5">
                <div className="signin-content">
                <div className="signin-img">
                            <figure>
                                <img src={alumni} alt="register-pic"/>
                            </figure>
                            <NavLink to="/signup" className="signin-image-link">Create an account</NavLink>

                        </div>
                        
                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method='POST' className="register-form" id="register-form">

                        
                            <div className="form-group>">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
                            </div>
                            <div className="form-group>">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-lock" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Sign in" onClick={loginUser}/>
                                

                            </div>
                            
                        </form>
                        </div>
                </div>
            </div> 
        </section>

    


   </>

    )
}
export default Login