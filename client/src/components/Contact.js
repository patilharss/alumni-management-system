import React,{ useEffect ,useState} from 'react'
const Contact =()=>{


    /// checking if user is logged in part
    const [userData,setUserData] = useState({name:"",email:"",phone:"",message:""});//getting data in userData
    

    const userContact = async ()=>{
        try{
            const res= await fetch('/getdata',{
                mathod:'GET',
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const data=await res.json();
            console.log(data)
            setUserData({...userData,name:data.firstname,email:data.email,phone:data.phone});
           

            

            if (!res.status===200){
                const error=new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
            userContact();
    },[]);

/// checking if user is logged in part^^


//storing data in state

const handleInputs=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserData({...userData,[name]:value});

}

//send data to backend , // message 
const contactForm= async (e)=>{
    e.preventDefault();

    //obj restructureing

    const {name,email,phone,message}=userData;

    const res=await fetch('/contact',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({

            name,email,phone,message

        })
    });
    const data=await res.json();

    if(!data){
        console.log("message not saved to db");
    }else{
        window.alert("Message Sent");
        setUserData({...userData,message:""});
    }
}

    return(
    <>
       <div className="contact_info">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                       <div className="contact_info_item d-flex justify-content-start align-items-center">
                       <img src="https://img.icons8.com/doodle/48/000000/ringing-phone.png" alt='phone'/>
                           <div className="contact_info_content">
                               <div className="contact_info_title ml-2">
                                   Phone
                               </div>
                               <div className="contact_info_text ml-2">
                                   +91 9876543210
                               </div>
                           </div>
                       </div>

                       <div className="contact_info_item d-flex justify-content-start align-items-center">
                       <img src="https://img.icons8.com/bubbles/50/000000/email.png" alt="email"/>
                           <div className="contact_info_content">
                               <div className="contact_info_title ml-2">
                                   Email
                               </div>
                               <div className="contact_info_text ml-2">
                                   sgu@sgu.co.in
                               </div>
                           </div>
                       </div>
                       <div className="contact_info_item d-flex justify-content-start align-items-center">
                       <img src="https://img.icons8.com/clouds/100/000000/worldwide-location.png" alt="address"/>
                           <div className="contact_info_content">
                               <div className="contact_info_title ml-2">
                                   Address
                               </div>
                               <div className="contact_info_text ml-2">
                                   Kolhapur
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>







       {/* {contact forn} */}
       <div className="contact_form">
           <div className="container">
               <div className="row">
                   <div className="col-lg-10 offset-ls-1">
                       <div className="contact_form_container py-5">
                           <div className="content_form_title">
                               Get in touch
                           </div>
                           <form method='POST' id="contact_form">
                                <div className="contact_form_name d-flex justify-content-between align-items-between">
                                    <input type="text" id="contact_form_name" className="contact_form_name input_feild" onChange={handleInputs} name="name" value={userData.name} placeholder="Name" required="true" autoComplete="nope"/>
                                    <input type="text" id="contact_form_email" className="contact_form_email input_feild" onChange={handleInputs} name="email" value={userData.email} placeholder="Email" required="true" autoComplete="nope"/>
                                    <input type="number" id="contact_form_phone" classphone="contact_form_phone input_feild" onChange={handleInputs} name="phone" value={userData.phone} placeholder="Phone" required="true" autoComplete="nope"/>
                                </div>

                                <div className="contact_form_text mt-5">
                                    <textarea className="text_feild contact_form_message" placeholder="Message" cols="50" row="10" onChange={handleInputs} name="message" value={userData.message}>
                                        
                                    </textarea>
                                </div>

                                <div className="contact_form_button mt-4">
                                    <button onClick={contactForm} type="submit" className="button contact_submit_button">Send Message</button>
                                </div>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </>

    )
}
export default Contact