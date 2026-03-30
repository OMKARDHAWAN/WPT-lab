import { Component } from "react";

export default class ClassLifeCycle extends Component{
    // class lifecycle method
    // mounting 
    // updating
    // unmounting
    constructor(props){
        super();        
        console.log("Constructor is called!!!");
    }
    
    componentDidMount(){
        console.log("Component Mounted!!!");
    } 
    
    componentWillUnmount(){
        console.log("Component unMounted!!");
    }
    
    getSnapshotBeforeUpdate(props){
 console.log("Get snap shot before updated!!!");
    }

    componentDidUpdate(){
        console.log("Component is updated!!!");
    }


    render(){
  console.log("render method is called!!!");
return <>
     <h1>Hello from class component</h1>    
        </>
    }
}