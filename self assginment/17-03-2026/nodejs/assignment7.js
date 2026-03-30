const express = require('express');
const app = express();
// Use Node and Express to write a simple web application that consists of at least 5 route 
// implementations


app.set("view engine", "ejs");



app.get("/",(req,resp)=>{
 resp.write('Hello from Home page');
 resp.end();
})

app.get("/aboutUs",(req,resp)=>{
    resp.write('Hello from about page');
    resp.end();
})

app.get("/contactUS",(req,resp)=>{
    resp.write('Hello from contact page');
    resp.end();
})

app.get("/login",(req,resp)=>{
 resp.write('Hello from login page');
 resp.end();
})

app.get("/signup",(req,resp)=>{
 resp.write('Hello from Signup page');
 resp.end();
})


app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
})
