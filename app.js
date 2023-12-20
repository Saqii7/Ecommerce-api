const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes')

const app =express();
app.use(express.json())
app.use('/',(req,res)=>{
    res.json({message:"Hello From Express JS"})
})
app.use('/api/v1',userRoutes)

module.exports = app;
