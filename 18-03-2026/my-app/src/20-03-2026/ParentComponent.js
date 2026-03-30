import { useState } from "react"
import ChildComponent from "./childcomponent";

export default function ParentComponent(){
    
  let [num1 , setNum1] = useState(0);
  let [num2 , setNum2] = useState(0);
  let [res,setResult] =  useState(0);
 
function changeResult(result){
    setResult(result)
    console.log(res);
}

 
return <>

<label htmlFor="number1">Number1: </label>
<input type="number" onBlur={(e)=>{setNum1(e.target.value)}} name="number1"/>

<label htmlFor="number2">Number2 : </label>
<input type="number" onBlur={(e)=>{setNum2(e.target.value)}} name="number2"/>

<h1>Result = {res}</h1>
<ChildComponent number1={parseInt(num1)} number2={parseInt(num2)} f1={changeResult}/>

</>
}