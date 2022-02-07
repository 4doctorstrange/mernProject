import React, { useEffect, useState } from "react";
//import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode"
import axios from "axios";
import { CreatePost } from "./Create_Post";
import { DisplayPosts } from "./Display_Posts";
import { useNavigate } from "react-router-dom";
import {Navbar, useNavbar} from "./Navbar";

export const LandingPage = () => {

    const [posts, setPosts] = useState([])
     
    const navigate = useNavigate()

    useEffect(async ()=>{
        console.log("mdkmoasmkdm")
        const response = await axios.get('http://localhost:5000/post').catch(err=>console.log(err))
        console.log(response)
        response.data.map(elem => (

        setPosts(posts => [...posts, elem])
        ))
        console.log('posts',posts)
    },[])


    
    return (
        <>
        <Navbar />
        
            <div className="container">
                <br></br>
            <h1 className="alert alert-success"  role="alert">Landing Page</h1>
                <div className="row">
                    <div className="col-8">
                        
                        <DisplayPosts posts={posts} name={true}/>

                    </div>
                    <div className="col-4">
                        {/* <CreatePost /> */}
                    </div> 
                </div>


                {/* <h1>welcome {name}</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <p>Logic for posts</p>
                    
                            <DisplayPosts posts={posts} />
                        </div>
                        <div className="col-4">
                            <CreatePost />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )

}