import { Component } from "react";

export default class Login extends Component{
    // //2) Create LoginForm using class component 
    // accept username and password 
    // and display
	//  hello <username>  on same page;
	// if username = "iet" and password = "iet"


    constructor(){
        super();
        this.textfield1 = this.textfield1.bind(this);
        this.textfield2 = this.textfield2.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {msg :" "};
        this.state = {username : " "};
        this.state = {password : " "};
       
    }
    textfield1(e){
        // console.log(e.target.value);
        this.setState({username : e.target.value })
    }
    textfield2(e){
        this.setState({password : e.target.value })
    }

    handleClick(){
     
         if(this.state.username == "iet" && this.state.password == "iet"){
                this.setState({msg : "Hello" + " " + this.state.username});
         }
    }


    render(){
        return <>
        <form>
         <h1>Login Form</h1>
         <label htmlFor="username"> Username</label>
         <input type="text" id="username" onBlur={this.textfield1}/>
       &nbsp;&nbsp;&nbsp;  <label htmlFor="password"> Password</label>
         <input type="text" id="password"  onBlur={this.textfield2}/>
         <button type="button" onClick={this.handleClick}>Login</button>
        </form>
       <h1 id="output">{this.state.msg}</h1>
        </>
    }
}