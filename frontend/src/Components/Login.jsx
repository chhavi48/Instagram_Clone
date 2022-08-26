import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Login.css";
const Login = () => {
  const [formData,setformDate]=useState({});
  const nav=useNavigate()

  const handleChange=(e)=>{
   
    const {value,name}=e.target;
    setformDate({
      ...formData,
      [name]:value,
    });

  };
    const handlelogin=async(e)=>{
      try{
        e.preventDefault();
        // console.log(formData)
        const {data}= await axios.post("http://localhost:8000/auth/login",formData)
        const user=data[0]
        localStorage.setItem("userid",user["_id"])
        // console.log(data[0]);
        nav("/feed")

      }
      catch(err){
             if(err.response.status===401){
                alert("invaild user ")
             }
      }
    
      
    }

    
  return (
    <div>
    
       <div className="outer">
        <form>
          <div className="logo">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"/>
          </div>
          <div className="userform">
         
        <input type="text" name="username" onChange={handleChange} placeholder="enter username"/><br/><br/>
        <input type="text" name='password' onChange={handleChange} placeholder="passowrd"/><br/><br/>
        <button onClick={handlelogin} className="loginbtn">Login</button>
          
          
          
          
          
           <p style={{fontSize:"14px", color:"gray",marginTop:"10px"}}>OR</p>
            <p></p>
            <a className='fb'>Log in with Facebook</a>
            <p style={{fontSize:"14px", color:"gray",marginTop:"10px"}}>Forgot password?</p>
       </div>
        </form>
    
       </div>

       <div className="secondouter">
        <p style={{textAlign:"center"}}>Don't have an account?   </p><Link to="/signup"><a href='' className='fb1'>Sign up</a></Link>
       </div>
      

         
        
       
        
      </div>

 
  
  )
}

export default Login