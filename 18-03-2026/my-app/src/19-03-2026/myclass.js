import { Component } from "react";

export default class Myclass extends Component{
  
  constructor(){ 
   //calling constructor of pre-defined class component
   super();
   this.textfield = this.textfield.bind(this);
   this.state = { Name : "" };
}
  
  textfield(e){
    // this.num = e.target.value;
    this.setState({ Name : e.target.value});
    // console.log(this.state.Name);
    
  }


    render(){
        // console.log(this.state.name);
     return <>
      <label htmlFor="name">Enter name</label>
      <input type="text" onChange={this.textfield} /> 
      <h1>{this.state.Name}</h1>
     </>
     }   
    }
  
