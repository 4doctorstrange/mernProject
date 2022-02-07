import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function loginUser(event) {
        event.preventDefault()
        const response = await axios.post('http://localhost:5000/user/login', { email, password })
            .catch((error) => console.log(error))
        
        //console.log(response)
        if (response.data.user){
            localStorage.setItem('token',response.data.user)
            alert('Login Succesful')
            navigate("/dashboard")
        }
        else{
            alert(response.data.msg)
            setEmail("")
            setPassword("")
        }

    }
    return (
        <div>
            <Navbar />
            <div className="container mt-10">
                <h2>Login</h2>
                <form onSubmit={loginUser}>
                    <div className="mb-3">

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email address</label>
                            <input type="email"
                                required
                                className="form-control"
                                id="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password"
                                required
                                className="form-control"
                                id="Password1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </div>
        </div>

    )
}