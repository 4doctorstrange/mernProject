import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
export const EditPost=()=>{
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)

    const {post} = location.state
    const [title,setTitle] = useState(post.title)
    const [content,setContent] = useState(post.content)

    const editPost = () =>{
        let data = {title:title,content:content,author:post.author}
        console.log(data)
            const response = axios.put(`http://localhost:5000/post/${post._id}`,data)
                                .catch((err)=>console.log(err))

            alert("Post Updated")
            navigate('/dashboard')

    }
    return(
        <>
        <Navbar />
        <div className="container">
            <br></br>
            <h3 className="alert alert-dark col-8 mt-10" role="alert">Edit Post</h3>
        <form onSubmit={editPost} className="col-8">
                    <div className="mb-3">

                        <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                            <input type="text"
                                required
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>   
                        <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                            <textarea type="text" 
                                rows="6"
                                required
                                className="form-control"
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-success">Update</button>
                        <Link to="/dashboard" className="btn btn-primary">Return</Link>
                    </div>
                </form>
                
                
        </div>
        </>
    )


}