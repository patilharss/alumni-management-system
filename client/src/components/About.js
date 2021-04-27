import React, { useEffect ,useState} from 'react';
import profile from "../images/profile.png";
import {useHistory} from "react-router-dom";


const About =()=>{
    
    const history=useHistory();
    const [userData,setUserData] = useState({});//getting data in userData
    

    const callAboutPage = async ()=>{
        try{
            const res= await fetch('/about',{
                mathod:'GET',
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data=await res.json();
            setUserData(data);
           

            

            if (!res.status===200){
                const error=new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err)
            history.push('/signin')

        }
    }

    useEffect(()=>{
            callAboutPage();
    },[]);
    return(
    <>
    <div className="container emp_prrofile">
        <form method="GET">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                    <img src={profile} alt="profile" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                        <h5>{userData.firstname+' '+userData.lastname}</h5>
                        <h6>{userData.designation +' at '+ userData.companyname}</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <input type="submit" className="profile-edit-btn" name="btnAddmore"value="Edit Profile"/>

                </div>

            </div>
            <div className="row">
                {/* left side url */}
                <div className="col-md-4">
                    <div className="profile-work">

                        <p>Work link</p>
                        <a href="http://github.com" target="_github">Github</a>
                        <br></br>
                        <a href="http://github.com" target="_github">Git lab</a>
                        <br></br>
                        <a href="http://github.com" target="_github">Instagram</a>
                    </div>
                </div>


                {/* right side data toggle */}
                <div className="col-md-8 pl-5 about-info" >
                    
                            <div className="row">
                                <div className="col-md-6">
                                    <label>ID</label>
                                </div>
                                <div className="col-md-6">
                                   <p>{userData._id}</p>
                                </div>

                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                   <p>{userData.email}</p>
                                </div>

                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div className="col-md-6">
                                   <p>{userData.phone}</p>
                                </div>


                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Location</label>
                                </div>
                                <div className="col-md-6">
                                   <p>{userData.companylocation}</p>
                                </div>
                                

                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>About</label>
                                </div>
                                <div className="col-md-6">
                                   <p>{userData.about}</p>
                                </div>
                                

                            </div>
                            
                            
                            

                        </div>
                  
            </div>
        </form>
    </div>


        
    </>

    )
}
export default About