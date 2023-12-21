const express = require("express");
const mongoose = require("mongoose");
const userRoute = require('./routes/userRoutes')

const app = express();
app.use(express.json())
// app.get('/',(req,res)=>{
//     res.json({message:"Hello From Express JS"})
// })
app.use('/api/v1',userRoute)

module.exports = app;
