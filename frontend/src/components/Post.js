import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


//props={post:{_id,title,content,author}, name:bool}
export const Post = (props) => {

    //settting author's name when it is called from landing page
    const [name, setName] = useState('')
    const navigate = useNavigate()


    useEffect(async () => {
        if (props.name) {   //props.name is booleean value

            const resp = await axios.get(`http://localhost:5000/user/${props.post.author}`)  //API returns user object
                .catch((err) => console.log(err))
            console.log(resp)
            setName(resp.data.name)
        }
    }, [])


    const deletePost = () => {
        let response = axios.delete(`http://localhost:5000/post/${props.post._id}`)
            .catch(err => console.log(err))

        navigate('/')

    }
    return (
        <div className="card" style={{ width: '48rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                {props.name
                    ? <h6 className="card-subtitle mb-2 text-muted">by: {name}</h6>
                    : <h6 className="card-subtitle mb-2 text-muted">{props.post.createdAt}</h6>
                }

                <p className="card-text">{props.post.content}</p>
                {
                    !props.name// when it is called from dashboard only then edit and display should be available
                        ?
                        <>
                            <Link to="/edit" state={{ post: props.post }} className="card-link btn btn-warning ">Edit</Link>
                            {/* <a href="#"  className="card-link btn btn-danger btn-sm">Delete</a> */}
                            <button type="button" className="card-link btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Delete Post
                            </button>

                            <div>
                                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Are you sure?</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body">

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" onClick={deletePost} data-bs-dismiss="modal" className="btn btn-primary">Yes, delete my post</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                        :
                        <button className="btn btn-primary btn-sm">Read More...</button>
                }
                <br></br>
            </div>
        </div>

    )

}