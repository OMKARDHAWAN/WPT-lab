const express = require('express');
const app = express();
const path = require('path');

const fs = require("fs");

app.get("/",(req,resp)=>{
    resp.end("Hello from server!!");
   resp.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/product",(req,resp)=>{
 fs.readFile("product.js","utf8",(error,data)=>{
 
 })
 resp.send("Hello from product page")
});



app.listen(5000,()=>{
console.log("Server started at Port 5000");
})
