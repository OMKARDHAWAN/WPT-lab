import { useState } from "react"

export default function Demo(){
   let [value , setValue] = useState("");

//    const handleClick = (e) =>{
//    console.log(value);
//    }

     return(
        <>
      <label htmlFor="">Enter the value </label>
      <input type="text" onChange={setValue()}/>
      <button>Show</button>
        </>
    )
}