import { Component } from "react"

export default class Counter extends Component{
  constructor(){
    super();
    this.i = 1;
    this.state = {count : 0};
    this.IncrementCount = this.IncrementCount.bind(this);
    this.DecrementCount = this.DecrementCount.bind(this);
   }
    
 IncrementCount(){
    this.i++;
  this.setState({count : this.i});
 };

 DecrementCount(){
   if(this.i > 0){
     this.i--;
    this.setState({count : this.i});
   }
 };
    render(){
        return <>
            <label htmlFor="">Enter the number :</label>&nbsp;&nbsp;
            <button type="button" onClick={this.IncrementCount} >Increment</button> &nbsp;&nbsp;&nbsp;
            <button type="button" onClick={this.DecrementCount} >decrement</button>
            <h1>{this.state.count}</h1>
            </>
        }
    }
