import React,{useState,useEffect} from 'react'
const Home =()=>{

    //check if user is login
    const [userName,setUserName] = useState('');//getting name in userName beacuse we need only that

    const [show,setShow]=useState(false);
    

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
            setUserName(data.firstname,data.lastname);
            setShow(true);
           

            

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
    return(
    <>
        <div className="home-page">
            <div className="home-div">
                <p className="pt-5"></p>
                <h1>{userName}</h1>
                <h2>{show ? ' Welcome Back' :'Please Sign in to see your home page' }</h2>
                <h1>Sanjay Ghodawat University Alumni</h1>
            </div>

        </div>

    </>

    )
}
export default Home