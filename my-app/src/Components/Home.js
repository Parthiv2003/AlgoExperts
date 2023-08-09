import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default function Eight1() {

    const [isHoverR1, setHoverR1] = useState(false);
    const [isHoverR2, setHoverR2] = useState(false);
    const [isHoverR3, setHoverR3] = useState(false);

    const handleHoverR1 = () => {
        setHoverR1(true);
    }
    const handleLeaveR1 = () =>{
        setHoverR1(false);
    }

    const handleHoverR2 = () => {
        setHoverR2(true);
    }
    const handleLeaveR2 = () =>{
        setHoverR2(false);
    }

    const handleHoverR3 = () => {
        setHoverR3(true);
    }
    const handleLeaveR3 = () =>{
        setHoverR3(false);
    }

    return (
        <> 
            <section style={{backgroundColor: "#28282B",color: "white", marginTop: "-3px"}}>
                <div className="container-fluid container-title" style={{fontFamily: "sans-serif",fontSize: "4rem", lineHeight: "1.5",padding: "3% 15% 7%"}}>
                    <div className="row">
                        <div className="col">
                            <h1 className="title-h1">
                                Don't Learn Alone
                            </h1>
                            <h2 style={{fontFamily: "sans-serif",fontSize: "2.5rem",lineHeight: "1.5",color: "white"}}>
                                Be the 'pro' in the Programming with 
                                <span className="algo"><em> AlgoExpert</em></span>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{padding: "7% 15%",backgroundColor: "white",position: "relative",zIndex: 1}}>
                <div className="row">
                    <div className="col">
                        <h1 className="title-h1">
                            Learn Data Structure on...
                        </h1>
                    </div>
                </div>
                <div className="container container-feature">
                    <div className="row" style={{textAlign:"center", margin: "5% 1%"}}>
                        <div className="col-lg-4 col-md-12" style={{padding : "5%", boxShadow: isHoverR1 ? "5px 5px 4px 4px gray" : ""}}>
                            <a href="https://www.codechef.com/" target={"_blank"} onMouseOver={handleHoverR1} onMouseLeave={handleLeaveR1}>
                                <img src={require('./codechef.jpg')} width="200px" height="100px"/>  
                            </a>                 
                            <h3 style={{fontFamily: 'Montserrat',fontSize: "1.5rem",fontWeight: "900"}}> Codechef </h3>
                            <p style={{fontFamily: 'Montserrat',fontWeight: "bold",color: "#8f8f8f"}}>Becomming a easy to start with codechef </p>
                        </div>
                        <div class="col-lg-4 col-md-12" style={{padding : "5%", boxShadow: isHoverR2 ? "5px 5px 4px 4px gray" : ""}}>
                            <a href="https://codeforces.com/" target={"_blank"} onMouseOver={handleHoverR2} onMouseLeave={handleLeaveR2}>
                                <img src={require('./codeforses.jfif')} width="200px" height="100px"/>  
                            </a> 
                            <h3 style={{fontFamily: 'Montserrat',fontSize: "1.5rem",fontWeight: "900"}}> Codeforcse </h3>
                            <p style={{fontFamily: 'Montserrat',fontWeight: "bold",color: "#8f8f8f"}} >Becomming a Best in compititive programming </p>
                        </div>
                        <div class="col-lg-4 col-md-12" style={{padding : "5%", boxShadow: isHoverR3 ? "5px 5px 4px 4px gray" : ""}}>
                            <a href="https://leetcode.com/" target={"_blank"} onMouseOver={handleHoverR3} onMouseLeave={handleLeaveR3}>
                                <img src={require('./leetcode.png')} width="200px" height="100px"/>  
                            </a> 
                            <h3 style={{fontFamily: 'Montserrat',fontSize: "1.5rem",fontWeight: "900"}}> Leetcode </h3>
                            <p style={{fontFamily: 'Montserrat',fontWeight: "bold",color: "#8f8f8f"}}> Becomming a pro in compititive Programming </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{backgroundColor: "#28282B",color: "white", position: "relative",zIndex: 1, padding: "3% 15% 5%"}}>
                <div className="row">
                    <div className="col" style={{padding : "5%"}}>
                        <h1 className="title-h1">
                            Learn Data Structure with AlgoExpert...
                        </h1>
                    </div>
                </div>
                <div className="container container-feature" style={{fontFamily: "sans-serif",fontSize: "24px", lineHeight: "1.5",padding: "3% 15% 7%"}}>
                    <div className="row">
                        <div className='col-lg-6'> 
                            <Link to='/Login'>
                                <a href="#" style={{marginLeft:"-10%",height:"2%",width:"5%",backgroundColor:"green", padding:"2%",borderRadius: "20% 10%", color: "white", textDecoration: "none !important"}}>
                                    <i className='fa fa-sign-in'></i> &emsp; Login
                                </a>
                            </Link>
                        </div>
                        <div className='col-lg-6'> 
                            <Link to='/SignUp'>
                                <a href='#' style={{marginLeft:"25%",height:"2%",width:"5%",backgroundColor:"green", padding:"2%", borderRadius: "20% 10%", color: "white", textDecoration: "none !important"}}>
                                    <i className='fa fa-registered'></i> &emsp; Register
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{padding: "7% 15%",paddingTop: "10%",backgroundColor: "white",textAlign: "center",color: "#fff"}}>
                <div class="row">
                    <div class="col">
                        <h1 class="" style={{paddingBottom: "0",color:"#28282B"}}>
                            Keep yourself growing up !!!
                        </h1>
                        <h2 class="" style={{color: "#28282B"}}>
                            Start your coding journey with AlgoExpets now!
                        </h2>
                    </div>
                </div>
            </section>

            <footer style={{textAlign: "center"}}>
                <a href="" style={{color: '#2e302f'}}>
                    <i className="fa-brands fa-twitter" style={{marginRight: "3%",marginBottom: "3%"}}></i>
                </a>
                <a href="https://github.com/Parthiv2003" style={{color: '#2e302f'}}>
                    <i className="fa-brands fa-github" style={{marginRight: "3%",marginBottom: "3%"}}></i>
                </a>
                <a href="https://www.linkedin.com/in/parthiv-dholakiya-329084207" style={{color: '#2e302f'}}>
                    <i className="fa-brands fa-linkedin" style={{marginRight: "3%",marginBottom: "3%"}}></i>
                </a>
                <a href="mailto:parthivdholakiya2003@gmail.com" style={{color: '#2e302f'}}>
                    <i className="fa-solid fa-envelope" ></i>
                </a>
                <Link to="/ContactUs">
                    <button> Contatct us</button>
                </Link>
                <p className="footer-p" style={{fontFamily: 'Montserrat', fontWeight: "bold",color:"#8f8f8f"}}>© Copyright AlgoExpert</p>
            </footer>
        </>
    )
}