
async function getdata(){

    try{
   let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   let data = await res.json()
   console.log(data);
    }catch(error){
console.log(error);
    }


}

getdata();