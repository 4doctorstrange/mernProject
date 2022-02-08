const Email = require('mongoose-type-email')
const User = require('../models/user.js')
const Post = require('../models/post.js')
const jwt = require('jsonwebtoken')

class UserController{  
    static getAllUSers = async(req,res)=>{
        try {
            const users = await User.find()
            //console.log(users)
            res.status(200).json(users)
        } catch (error) {
            console.log(error)
            
        }
    }
    static getUser = async(req,res)=>{
        
        try {
            const user = await User.findOne({"_id":req.params.id})
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
        }
    }

    static registerUser = async(req,res)=>{
        try {
            const user = await new User(req.body)
            console.log(user)
            await user.save()
            const token = jwt.sign({
                id:user.id,
                name:user.name
            },'secret123')
            res.status(201).json({"msg":"user createds",user:token})
        } catch (error) {
            console.log(error)
            res.status(404).json(error.message)

            
        }
    }

    //C
    static loginUser = async (req,res) =>{
        try {
            const {email,password} = req.body
            const user = await User.findOne({email,password}) //if email exists then we get the user
            
            if (user) {
                const token = jwt.sign({
                    id:user.id,
                    name:user.name
                },'secret123')
                res.status(200).json({'msg':"login succesful", user:token})
            }
            else{
                res.status(200).json({"msg":"wrong email or password"})

            }
            
        } catch (error) {
            console.log(error)
        }
    }
    
    static deleteUser = async (req,res) =>{
        try {
            const id = req.params.id
            //firstly we will delete all the posts of that user
            const post_del  = await Post.deleteMany({"author": id})
            //Now deleting the user
            const user_del = await User.findByIdAndDelete(id)
            res.status(200).json({"msg":"User and all his/her posts are deleted "})

            
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
            
        }
    }

}

module.exports = UserController