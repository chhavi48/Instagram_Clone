import React, { useState } from "react"
import "./Signup.css"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [username,setUser] = useState('')
    const [password, setPassword] = useState('')
    const nav =useNavigate()

    const handleuserChange = (e) => {
        setUser(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async () => {
        const payload = {
            username,
            password
        }
         await fetch("http://localhost:8000/auth/signup", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
              },
        })
        if(username.length!=0 && password.length!=0)
        {
            alert("register successfully")
            nav("/")
        }
        if(username.length==0 && password.length==0)
        {
            alert("please sigup")
            
        }
       
    }
    return  <div className="outer">
    <div style={{padding:"20px"}}>
    <div className="logo">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"/>
          </div>
          <div className="userform">
        <h1 style={{color:"gray"}}>Sigup </h1>
        <input style={{marginBottom:"20px"}} type="text" placeholder="username" value={username} onChange={handleuserChange}></input><br></br>
        <input style={{marginBottom:"20px"}} type="text" placeholder="password" value={password} onChange={handlePasswordChange}></input><br />
        <button onClick={handleSubmit} className="loginbtn">Signup</button>
        </div>
    </div>
    </div>
}

export {Signup}
