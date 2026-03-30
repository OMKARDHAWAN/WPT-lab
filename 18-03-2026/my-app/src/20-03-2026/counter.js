import { useState } from "react"

export default function Counter(){
    
   let [count , setCount] = useState(0);
   
   function increment(){
    setCount(count++);
   };

   function decrement(){
    if(count >= 0){
         setCount(count--);
    }
   }
   
    return(
        <>
        <button onClick={increment}>Increment</button> &nbsp;&nbsp;
        <button onClick={decrement}>Decrement</button>
        <h1>Count: {count}</h1>
        </>
    )
}