import React, { useState } from "react"

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
    return <div style={{marginLeft:"500px",marginTop:"100px",padding:"20px",width:"400px"}}>
        
        <h1>Sigup </h1>
        <input style={{marginBottom:"20px"}} type="text" placeholder="username" value={username} onChange={handleuserChange}></input><br></br>
        <input style={{marginBottom:"20px"}} type="text" placeholder="password" value={password} onChange={handlePasswordChange}></input><br />
        <button onClick={handleSubmit}>Signup</button>
    </div>
}

export {Signup}
