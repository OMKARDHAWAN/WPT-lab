const http = require('http');
const fs = require('fs');
const server = http.createServer(getdata);

function getdata(req, res){
  
}

server.listen(5000,()=>{
 console.log("Server is running at 5000");
})