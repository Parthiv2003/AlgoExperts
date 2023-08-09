import React, { Component } from "react";
import "./Main.css";
import "./DataStructure.jfif";
import "./algorithm.jpeg";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin");
        if (data.status === "ok" && data.data != null) {
          alert("AlgoExperts: Login Successful...");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./Choose";
        }
        else{
          alert("AlgoExperts: Email-Id and Password Not Match...")
          window.location.href = "./Login";
        }
      });
  }

  render() {
    return (
      <div className="DFrame">
        <form onSubmit={this.handleSubmit}>
          <h2 style={{marginTop:"30px",marginBottom:"30px",color:"black"}}>
            <img src={require=("./algorithm.jpeg")} width="50px" height="50px"></img>
          </h2>

          <div className="mr-5 ml-5">
            <label>Email Address: <span style={{color:"red"}}>*</span></label>
            <input required type="email" className="form-control" placeholder="Enter Email-Id" onChange={(e) => this.setState({ email: e.target.value })} />
          </div>

          <div className="mr-5 ml-5">
            <label>Password: <span style={{color:"red"}}>*</span></label>
            <input required type="password" className="form-control" placeholder="Enter Password" onChange={(e) => this.setState({ password: e.target.value })} />
          </div>

          <div className="mr-5 ml-5">
            <div className="custom-control custom-checkbox">
              <input required type="checkbox" className="custom-control-input required" id="customCheck1" />
              <label className="custom-control-label m-4" htmlFor="customCheck1">
                Remember Me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-dark mr-5 ml-5 b1">
              Sign In
            </button>
          </div>
            
          <div className="forgot-password mt-3 mb-5" style={{marginLeft:"58%"}}>
            <div className="flex d-flex">
              <span>Don't Have an Account?</span> &nbsp;&nbsp;
              <a href="/SignUp">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}