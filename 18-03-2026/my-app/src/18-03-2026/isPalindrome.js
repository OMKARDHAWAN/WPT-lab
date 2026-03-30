export default function IsPalindrome(props){
  

    let newnum = props.number.toString();

   
   let reverse = newnum.split("").reverse().join("");
   

   if(newnum == reverse){
     document.getElementById("h1").innerText = "Given number is palindrome!!!";
   }else{ 
    document.getElementById("h1").innerText = "Given number is not palindrome!!!";
   }

    return  (
        <h1 id="h1"></h1>
    )

}