import React, { useEffect, useState } from "react";
//import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { CreatePost } from "./Create_Post";
import { DisplayPosts } from "./Display_Posts";
import { Navbar } from "./Navbar";


export const Dashboard = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [posts, setPosts] = useState([])

    
    useEffect(async () => {
        const token = localStorage.getItem('token')
        //console.log(token)

        if (!token) {
            localStorage.removeItem('token')
            navigate('/login', { replace: true })
        }
        else {
            const decoded_token = jwt_decode(token) //decoded token will give id and name of the author
            // console.log(decoded_token,"efhuin")
            if (!name) setName(decoded_token.name) //Setting name from the token
            console.log(name)
            //populateDashboard(decoded_token)   
            //
            let response = await axios.get(`http://localhost:5000/post/${decoded_token.id}`)
                .catch((err) => console.log(err))
            
                response.data.posts.map(elem => (

                    setPosts(posts => [...posts, elem])
                ))
            
            ///console.log("posts", posts)
        }

    }, [])

    
    return (
        <>
            <Navbar />
            <p></p>
            <div className="container mt-10">
                <h1 className="alert alert-danger col-10 mt-10" role="alert">Welcome {name}</h1>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-8">
                        {posts.length===0
                        ?
                        <h4 className="alert alert-secondary" role="alert">
                            You haven't made any posts yet!
                        </h4>
                    :
                    <DisplayPosts posts={posts}  />
                    }
                            
                        </div>
                        <div className="col-4">
                            <CreatePost />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}