const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./db/connectdb.js')
const routerUser = require('./routes/userRoute.js')
const routerPost = require('./routes/postRoute.js')


dotenv.config()
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/user',routerUser)
app.use('/post',routerPost)

const port = process.env.PORT || '5000'

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
connectDB(DATABASE_URL)

app.get('/',(req,res)=>{
    res.send("Landing Page where you can see all the blogs")
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)

})