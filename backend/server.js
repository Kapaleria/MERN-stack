require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

//create express app
const app = express()
 
//middleware happens btn res and req
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//route handler
app.use('/api/workouts',workoutRoutes)

/**app.get('/',(req,res)=>{
        res.json({message:"Irene Best"})
})**/

//connect to DB
//its asynch so returns a promise
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen at this port number
    app.listen(process.env.PORT,()=>{
    console.log('Im still listening to you ')
})
})
.catch((error)=>{console.log(error)})

/** listen at this port number
app.listen(process.env.PORT,()=>{
    console.log('Im still listening to you ')
})*/