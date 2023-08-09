import React from 'react'
import './Navbar.css';
import './algorithm.jpeg';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  function logout(){
    // window.localStorage.clear();
    window.localStorage.setItem("loggedIn", false);
    window.location.href='./Login';
  }

  return (
    <div className='mb-5'>
      <div className="flex d-flex d1 navbar fixed-top" style={{justifyContent:"right"}}>
        <Link to="/Home" style={{marginRight:props.mg}}>
          <img src={require("./algorithm.jpeg")} className='image' alt="logo" />
        </Link>
        <Link to="/Choose">
          <button className='start' style={{display: props.start != ""?'': 'none'}}> {props.start}  </button>   
        </Link> &nbsp; &nbsp; &nbsp;
        <Link to="/AboutUs">
          <button className="about"> ABOUT US </button>
        </Link>
        &nbsp; &nbsp; &nbsp;
        <button className="logout" onClick={logout}> {props.name} </button>   
      </div>
    </div>
  )};
