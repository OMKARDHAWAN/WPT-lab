import { Component } from "react";
// Accept TO DO tasks in text field and display 
//    tasks in Ordered List on same page on buttonclick
export default class Todo extends Component {
    constructor() {
        super();
        this.textfield = this.textfield.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = { list: [],value : "" };
        // this.state = { value : ""};
    }
 
   textfield(e){
    this.setState({value : e.target.value});
   }

    handleClick() {
        this.setState({list : [...this.state.list,this.state.value],value:" "});
    }

    render() {
        return <>
            <label htmlFor="">Accept Data : </label>
            <input type="text"  onChange={this.textfield} />
            <button type="button" onClick={this.handleClick}> Show</button>
            <ol>
   {
    this.state.list.map((data)=>{
        return (
            
            <li>{data}</li>
            
        )
    })
   }
            </ol>
        </>

    }
}