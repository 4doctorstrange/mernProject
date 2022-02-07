import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";


export const CreatePost = (props) => {

    const [title, setTitle] = useState(props.title)
    const [content, setContent] = useState(props.content)

    const navigate = useNavigate()
    
    //We have to send id of user and post content, id can be fetched from local storage
    async function createPost(event) {
        event.preventDefault()
        const token = localStorage.getItem('token')
        const decoded_token = jwt_decode(token)  // this holds id
        const id  = decoded_token.id 
        
        const post_body = {'title':title, 'content':content, "author":id}

        const response = await axios.post('http://localhost:5000/post', post_body )
            .catch((error) => console.log(error))
        
        console.log(response.status)
        setTitle("")
        setContent("")
        
     }

    useEffect(async () => {
        const token = localStorage.getItem('token')
        //console.log(token)
        if (!token) {
            localStorage.removeItem('token')
            navigate('/', { replace: true })
        }
    })
     
    return (
        <div>
            <div className="container mt-10">
                <h2>Add Post</h2>
                <form onSubmit={createPost}>
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
                                rows="4"
                                required
                                className="form-control"
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </div>
        </div>

    )
}