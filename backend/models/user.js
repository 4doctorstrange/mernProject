const mongoose = require('mongoose');
const Email = require('mongoose-type-email');
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email: { type:Email ,required:true, trim:true},
    password: {type:String, required:true }

}
)

const user = mongoose.model("user", userSchema) // table in db
module.exports = user
