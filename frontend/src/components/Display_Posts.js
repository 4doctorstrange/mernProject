import React from "react";
import { Post } from "./Post";


export const DisplayPosts = (props) =>{
    
    const posts = props.posts
    console.log("in display",posts)
    const list = posts.map(post=>(
            <li key = {post._id}><Post post={post} name = {props.name}/></li>
    ))
    return(
           <ul>{list}</ul> 
    )

}