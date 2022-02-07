const mongoose = require('mongoose')
const Post = require('../models/post.js')
const User = require('../models/user')

class PostController{
    static getAllPosts = async(req,res)=>{
        try {
            const posts = await Post.find()
            //console.log(posts)
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            
        }
    }   

    //To get all the posts of a user
    static getUserPosts = async (req,res) =>{
        try {
            
            const posts = await Post.find({"author":req.params.user})
            //console.log(posts)
            const author =  await User.findById(req.params.user)
            res.status(200).json({author,posts})
        } catch (error) {
            console.log(error)
            
        }
    }
    static createPost = async(req,res)=>{
        try {
            const post = await new Post(req.body)
            //console.log(post)
            await post.save()
            res.status(201).json({"msg":"post created"})
        } catch (error) {
            console.log(error)
            
        }
    }

    static editPost = async(req,res) =>{
        try {
            // console.log(req.params.body)
            // console.log(req.body)
            const newPost = await Post.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({"msg":"Post Updated"})

        } catch (error) {
            console.log(error)  
        }
    }

    static deletePost = async  (req,res) => {
        try {
            //console.log(req.params.id)
            await Post.findByIdAndDelete(req.params.id)
            res.status(204).json({"msg":"post deleted"})
        } catch (error) {
            console.log(error)
            
        }
    }
    
}
module.exports = PostController