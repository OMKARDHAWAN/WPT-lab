import { useState } from "react"

export default function ChildComponent({ number1, number2, f1 }) {
    let [option, setOption] = useState("");
    var res;
    // console.log(number1);
    // console.log(number2);

    function handleChange(e) {
        setOption(e.target.value);


        // console.log();
        switch (e.target.value) {
            case 'Addition':
               var result1 = number1 + number2;
                // console.log("Addtion");
                f1(result1);
                break;

            case 'Substraction':
                var result2 = number1 - number2;
                f1(result2);
                // console.log("subtra");
                break;

            case 'Multiplication':
               var result3 = number1 * number2;
                f1(result3);
                // console.log("mul");
                break;

            case 'Divide':
               var result4 = number1 / number2;
                f1(result4);
                // console.log("divide");
                break;

            default: break;
        }
    }

    return <>
            <select onChange={handleChange}>
            <option value="Addition" >Addtion</option>
            <option value="Substraction" >Subtraction</option>
            <option value="Multiplication" >Multiplication</option>
            <option value="Divide" >Divide</option>
        </select>
    </>
}