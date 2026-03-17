function sum (){
    var a = 10;
    var b = 20;
    var result = 10+20;
    console.log(result);
}

sum();

setTimeout((res)=>{
 console.log("SetTimeout is called!!!");
},1000);


let promise = new Promise((resolve,reject)=>{
  let a = true;
  if(a){
    resolve("Promised resolved");
  }else{
    reject("Promised rejected");
  }
})


promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})


console.log("Hello world!!!");