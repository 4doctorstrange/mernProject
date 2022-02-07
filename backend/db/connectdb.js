const mongoose = require('mongoose')


const connectDB = async (DATABASE_URL) => {
    try{
        const DB_OPTIONS = {
            dbName: "blogapp",
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("Connected succesfully")
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = connectDB;
