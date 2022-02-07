import React from "react";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Navbar } from "./Navbar";

export const Register = () => {
 const [name,setName] = useState('')
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')

 const navigate = useNavigate()

 async function registerUser(event) {
     event.preventDefault()
    const response = await axios.post('http://localhost:5000/user/register',{name,email,password}).then(console.log("user reistered"))
    // .then(()=>{
    //     setEmail("");
    //     setPassword("")
    //     })        
    .catch((error)=>console.log(error))

    console.log(response)
    if (response.status===201){
        localStorage.setItem('token',response.data.user)
        navigate('/dashboard')
    }

 }
    return (
        <div>
            <Navbar />
        <div className="container mt-10">
            <h2>Register</h2>
            <form onSubmit={registerUser}>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input type="text" 
                        required
                        className="form-control" 
                        id="Name"  
                        value = {name}
                        onChange={(e)=>setName(e.target.value)}
                        
                        />
                
            </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email address</label>
                <input type="email" 
                        required
                        className="form-control" 
                        id="Email"  
                        value = {email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                <div  className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="Password" className="form-label">Password</label>
                <input type="password" 
                        required
                        className="form-control" 
                        id="Password1" 
                        value = {password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </div>
        </div>
        
    )
}