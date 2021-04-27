
import React,{useState} from 'react'
import alumni from "../images/alumni1.jpg";
import { NavLink, useHistory } from 'react-router-dom'

const Signup =()=>{
    const history=useHistory();
    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        yearofadmission:"",
        yearofgrad:"",
        department:"",
        dateofbirth:"",
        employed:"",
        designation:"",
        companyname:"",
        companylocation:"",
        about:"",
        password:"",
        cpassword:""})
        let name,value;
        const handleInputs=(e)=>{
            console.log(e)
            name=e.target.name;
            value=e.target.value;

            setUser({...user,[name]:value});
        }

        const PostData=async(e)=>{
            e.preventDefault();
            const {firstname,lastname,email,phone,yearofadmission,yearofgrad,department,dateofbirth,employed,designation,companyname,companylocation,about,password,cpassword} = user;

            const res =await fetch("/register",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({

                    firstname,lastname,email,phone,yearofadmission,yearofgrad,department,dateofbirth,employed,designation,companyname,companylocation,about,password,cpassword

                })
            });
            const data = await res.json();

            if (data.status===422 || !data){
                window.alert('Reg failed pls try again');
                console.log('reg failed')
            }else{
                window.alert('Reg Done');
                console.log('reg Done')

                history.push("/signin");

            }




        }


    return(
    <>

         <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">

                            <div className="form-group">
                                <label htmlFor="name">
                                <i class="zmdi zmdi-account" style={{marginRight:1+ 'em'}}/>
                                </label>
                                <input type="text" name="firstname" id="firstname" autoComplete="off"
                                    value={user.firstname} onChange={handleInputs} placeholder="First Name" />
                                <span class="input-group-addon">   </span> 
                                <input type="text" name="lastname" id="lastname" autoComplete="off"
                                    value={user.lastname} onChange={handleInputs} placeholder="Last Name"/>    
                            </div>

                            <div className="form-group>">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="text" name="email" id="email" autoComplete="off"
                                    value={user.email} onChange={handleInputs} placeholder="Email"/>
                            </div>

                            <div className="form-group>">
                                <label htmlFor="dateofbirth">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16" style={{marginRight:0.7+ 'em'}}>
                                    <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                </svg>
                                </label>
                                <input type="dateofbirth" name="dateofbirth" id="dateofbirth" autoComplete="off"
                                    value={user.dateofbirth} onChange={handleInputs} placeholder="Date of birth"/>
                            </div>

                            <div className="form-group>">
                                <label htmlFor="phone">
                                <i  class="zmdi zmdi-phone" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="number" name="phone" id="phone" autoComplete="off"
                                    value={user.phone} onChange={handleInputs} placeholder="Phone"/>
                            </div>


                            

                            <div className="form-group>">
                                <label htmlFor="yearofadmission">
                                <i  class="zmdi zmdi-calendar-alt" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="number" name="yearofadmission" id="yearofadmission" autoComplete="off"
                                    value={user.yearofadmission} onChange={handleInputs} placeholder="Year of Admission"/>
                            </div>


                            <div className="form-group>">
                                <label htmlFor="yearofgrad">
                                <i  class="zmdi zmdi-calendar-check" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="number" name="yearofgrad" id="yearofgrad" autoComplete="off"
                                    value={user.yearofgrad} onChange={handleInputs} placeholder="Year of Graduation"/>
                            </div>

                            <div className="form-group>">
                                <label htmlFor="department">
                                <i  class="zmdi zmdi-book" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="department" name="department" id="department" autoComplete="off"
                                    value={user.department} onChange={handleInputs} placeholder="Department"/>
                            </div>


                            <div className="form-group>">
                                <label htmlFor="employed">
                                <i class="zmdi zmdi-case" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="employed" name="employed" id="employed" autoComplete="off"
                                    value={user.employed} onChange={handleInputs} placeholder="Employed"/>
                            </div>

                            <div className="form-group>">
                                <label htmlFor="designation">
                                <i class="zmdi zmdi-star" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="designation" name="designation" id="designation" autoComplete="off"
                                    value={user.designation} onChange={handleInputs} placeholder="Designation"/>
                            </div>

                            <div className="form-group>">
                                <label htmlFor="companyname">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16" style={{marginRight:0.7+ 'em'}}>
                                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                                </svg>
                                </label>
                                <input type="companyname" name="companyname" id="companyname" autoComplete="off"
                                    value={user.companyname} onChange={handleInputs} placeholder="Company Name"/>
                            </div>

                            <div className="form-group>">
                                <label htmlFor="companylocation">
                                <i class="zmdi zmdi-gps-dot" style={{marginRight:0.9+ 'em'}}></i>
                                </label>
                                <input type="companylocation" name="companylocation" id="companylocation" autoComplete="off"
                                    value={user.companylocation} onChange={handleInputs} placeholder="company Location"/>
                            </div>

                            <div className="form-group>">
                                <label htmlFor="about">
                                <i class="zmdi zmdi-info" style={{marginRight:0.9+ 'em'}}></i>
                                </label>
                                <input type="about" name="about" id="about" autoComplete="off"
                                    value={user.about} onChange={handleInputs} placeholder="About"/>
                            </div>

                            <div className="form-group>">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-lock-outline" style={{marginRight:1+ 'em'}}></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                    value={user.password} onChange={handleInputs} placeholder="Password"/>
                                <span class="input-group-addon">   </span> 
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                    value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password"/>
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={PostData}/>
                            </div>     
                        </form>
                        </div>
                        <div className="signup-img">
                            <figure>
                                <img src={alumni} alt="register-pic"/>
                            </figure>
                            <NavLink to="/signin" className="signup-image-link">I am already registered</NavLink>
                        </div>                       
                </div>
            </div> 
        </section>
    </>
)
}

export default Signup

