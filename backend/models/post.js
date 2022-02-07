const mongoose = require('mongoose');
const User = require('../models/user.js')

const postSchema = new mongoose.Schema({
    title:{type:String, required:true, trim:true},
    content: { type:String ,required:true, trim:true},
    author: {type: mongoose.SchemaTypes.ObjectId, 
             ref: User,
             required:true },
},
   {timestamps:true}
)

const post = mongoose.model("post", postSchema) // table in db
module.exports = post

//61fcc2cb6015374ac3eab78e
