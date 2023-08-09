import React, { Component } from "react";
import './signup.css';

export default class SignUp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this); //binding it 
  } 

  handleSubmit(e) {
    e.preventDefault(); 
    const { fname, lname, email, password } = this.state;
    console.log("Hii : ");
    console.log(fname, lname, email, password);
    
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => {
        console.log(res.status)
        res.json()
        if(res.status == 200){
          console.log("userRegister");
          window.alert("AlgoExperts: Sign Up Successfully Done...")
          window.location.href='./Login';
        }
        else{
          window.alert("AlgoExperts: Sign Up Error! Please Try Again...")
          window.location.href='./SignUp';
        }
      });
  }

  render() {
    return (
      <div className="Sp">
        <form onSubmit={this.handleSubmit} className="m-5">
          <h3>Sign Up</h3> <br /> 
          <div className="mb-2">
            <label>First Name: <span style={{color:"red"}}>*</span></label>
            <input required type="text" className="form-control" placeholder="First Name" onChange={(e) => this.setState({ fname: e.target.value })} />
          </div>

          <div className="mb-3">
            <label>Last Name: <span style={{color:"red"}}>*</span></label>
            <input required type="text" className="form-control" placeholder="Last Name" onChange={(e) => this.setState({ lname: e.target.value })} />
          </div>

          <div className="mb-3">
            <label>Email Address: <span style={{color:"red"}}>*</span></label>
            <input required type="email" className="form-control" placeholder="Enter Email-Id" onChange={(e) => this.setState({ email: e.target.value })} />
          </div>

          <div className="mb-3">
            <label>Password: <span style={{color:"red"}}>*</span></label>
            <input required type="password" className="form-control" placeholder="Enter Password" onChange={(e) => this.setState({ password: e.target.value })} />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-dark b1"> Sign Up </button>
          </div>
        
          <p className="forgot-password text-right mt-2">
            Already Registered? &nbsp; 
            <a href="/Login">Sign In</a>
          </p>
        </form>
      </div>
    );
  }
}