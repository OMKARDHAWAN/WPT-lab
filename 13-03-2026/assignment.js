// console.log("Hello");

// setTimeout(()=>{
//  console.log("My name is john");
// },1000)


// function step1(){
//     console.log("Step1 performed task");
    
//     setTimeout(()=>{
//     Step2();  
//     },1000)
// }

// function Step2(){
//     console.log("Step2 performed task");
//     setTimeout(()=>{
//     Step3();  
//     },1000)
// }

// function Step3(){
//     console.log("Step3 performed task");
// }

// step1();


function step1() {
   return new Promise((resolve,reject)=>{
  setTimeout(() => {
        console.log("Step 1 completed");
        resolve();
    }, 1000);
   }) 
}
function step2() {
     return new Promise((resolve,reject)=>{
  setTimeout(() => {
        console.log("Step 2 completed");
        resolve();
    }, 1000);
   }) 
}

function step3() {
     return new Promise((resolve,reject)=>{
  setTimeout(() => {
        console.log("Step 3 completed");
        resolve();
    }, 1000);
   }) 
}

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All step are completed!!!");
//         })
//     })
// });



step1.then(()=>{
    return step2();
}).then(())
// console.log("Task finished");

// function add(a1,a2){
//     return console.log("the sum of ",a1 + a2);
// }

// function result(a1,a2){
//     console.log("The value of a1 :",a1);
//     console.log("the value of a2 :",a2);

//     return add(a1,a2);


// //    setTimeout(()=>{
// //     console.log("The sum of the a1 and a2 : ",a1+a2);
// //    },1000)
// }


// result(10,20)
