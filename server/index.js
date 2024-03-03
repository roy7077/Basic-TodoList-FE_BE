const express=require('express');
const todoRoutes=require('./Routes/todos');
const dbConnect=require('./Config/database');
const cors = require("cors");
require('dotenv').config();

const app=express();
const PORT = process.env.PORT || 8080;



app.use(express.json());
app.use(cors());



app.get('/',(req,res)=>{
    res.send(`<h1> Welcome to Home page`)
})

app.use("/api/v1",todoRoutes);

// app.post("/test",(req,res)=>{
//     console.log(req.body);
//     res.status(200)
//     .json({
//         success:true,
//         message:"hello sagar",
//     })
// })

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
})

dbConnect();