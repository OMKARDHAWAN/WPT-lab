const express = require('express');
const app = express();
const path = require('path');

const fs = require("fs");

app.get("/", (req, resp) => {
    resp.end("Hello from server!!");
});

app.get("/product", (req, resp) => {
    fs.readFile("hello.txt", "utf8", (error, data) => {
        console.log(data);
    })
    resp.send("Hello from product page")
});

app.get("/create", (req, resp) => {
    fs.writeFile("hello.txt", "/nHello world!!", (err) => {
        if (err) throw err;
        console.log("File Created!!!");
    });
    resp.send("data writen in file succesfully");
})

app.get("/append", (req, resp) => {
    fs.appendFile("hello.txt", "/nHello Omkar!!!!!", (err) => {
        if (err) throw err;
        console.log("File Created!!!");
    });
    resp.send("data appended successfully!!!");
})


app.get("/delete", (req, resp) => {
    fs.unlink("hello.txt", (err) => {
        if (err) throw err;
        console.log("File Deleted Successfully!!!");
    });
    resp.send("File Deleted Successfully!!!");
})

app.get("/folder",(req,resp)=>{
  fs.mkdir("folder",(err)=>{
    if (err) throw err;
    console.log("Folder is created!!!");
  })
  resp.send("folder created successfully!!!");
})

app.get("/readFolder",(req,resp)=>{
  fs.readdir("folder",(err,data)=>{
    if (err) throw err;
    console.log(data);
  })
  resp.send("folder created successfully!!!");
})


app.listen(5000, () => {
    console.log("Server started at Port 5000");
})
