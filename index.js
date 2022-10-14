const express=require('express');
const app=express()
const mongoose=require('mongoose');
const PORT=4000;
const mongo_url="mongodb+srv://root:root@cluster0.9gwkj.mongodb.net/test?retryWrites=true&w=majority"
const userRoutes=require('./routes/user.routes')


mongoose.connect(mongo_url,()=>{

    console.log("Database is connected")
})



app.use(express.json());

app.use('/',userRoutes)


app.listen(PORT,()=>{

    console.log("Server is running....")
})