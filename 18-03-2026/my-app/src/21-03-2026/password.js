import { useState } from "react"


export default function Password() {
   let [length, setLength] = useState();
   let [number, setNumber] = useState(false);
   let [symbol, setSymbol] = useState(false);
   let [password, setPassword] = useState();

   function genratePassword() {
      let character = "adsandadnasdnadaddnajdnajdnadnasdnad";
      if (number) character += '0123456789';
      if (symbol) character += '!@#$%^&*()_+';
      let data = '';
      for (let i = 0; i < length; i++) {
         data += character.charAt(Math.floor(Math.random() * 12));
         // console.log(data);
         setPassword(data)
      }
 console.log(password);
   }



   return <>

     
      <div id="main" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "width": "100%", "height": "100%", "border": "2px solid black", "flexDirection": "column" }}>
      <h1>Password Genrator</h1>
      <label htmlFor="">Enter the password length:</label>
         <input type="number" id="length" onChange={(e)=>setLength(e.target.value)} />
         <label htmlFor="includeNumber">
            <input type="checkbox" id="includeNumber" value={number} onClick={()=>{setNumber(!number)}} />
            Include Number
         </label>
         <label htmlFor="includeSymbol">
            <input type="checkbox" id="includeSymbol" value={symbol} onClick={()=>{setSymbol(!symbol)}} />
            Include Symbol
         </label>
         <div>
         <input type="text" id="password" style={{"margin":"0 20px"}} />
         <button>Copy</button>
         </div>
         <button type="button" onClick={genratePassword}>Create</button>
         <p></p>
      </div>
   </>
}