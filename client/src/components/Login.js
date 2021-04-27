import React from 'react'
import alumni from "../images/alumni1.jpg"
import { NavLink, Route } from 'react-router-dom'

const Login =()=>{
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
                        <form className="register-form" id="register-form">

                        
                            <div className="form-group>">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="text" name="email" id="email" autoComplete="off" placeholder="Email"/>
                            </div>
                            <div className="form-group>">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-lock" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="text" name="password" id="password" autoComplete="off" placeholder="Password"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Sign in"/>


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