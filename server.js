const express=require('express');
const connectDB= require('./DbConnection/Connection')
const app=express();
const Port= process.env.Port || 3000;

connectDB();
app.listen(Port, ()=>console.log("server started"))