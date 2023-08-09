import React from 'react'
import './AboutUs.css';
import './meet.jpeg';
import './parthiv.jpeg';
import './vineet.jpeg';

export const AboutUs = () => {
    return (
        <div>
            <section id="title">
                <div className="container-fluid container-title" style={{marginTop: "-3px"}}>
                    <div className="row">
                        <div className="col">
                            <h1 className="title-h1">
                                Don't Learn Alone
                            </h1>
                            <h2> Be the 'pro' in the Programming with 
                                <span className="algo"><em> AlgoExpert</em></span>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features">
                <div className="container container-feature">
                    <div className="row" style={{textAlign:"center"}}>
                        <div className="col-lg-4 col-md-12 feature-box">
                            <i className='fa-solid fa-code fa-icon-features'></i>
                            <h3> Be the Pro </h3>
                            <p className="feature-p"> Becomming a pro is easy when you start with us</p>
                        </div>
                        <div className="col-lg-4 col-md-12 feature-box">
                            <i className="fa-solid fa-bullseye fa-icon-features"></i>
                            <h3>Best of All</h3>
                            <p className="feature-p">Best of programming questions</p>
                        </div>
                        <div className="col-lg-4 col-md-12 feature-box">
                            <i className="fa-solid fa-circle-check fa-icon-features"></i>
                            <h3>Easy to Use</h3>
                            <p className="feature-p">Very easy to use and track your progress</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="testimonials">
                <div className="container container-testimonial">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h2> Computer Science student with a strong passion for mathematics and technology. </h2>
                                <img className="testimonial-img" src={require("./vineet.jpeg")} alt=""/>
                                <br/>
                            </div>
                            <div className="carousel-item">
                                <h2>A computer enthusiast trying to explore different fields of computer science with an inclination towards web development.</h2>
                                <img className="testimonial-img" src={require("./parthiv.jpeg")} alt=""/>
                            </div>
                            <div className="carousel-item">
                                <h2>Using software to solve interesting problems is one of the fascinating things I really enjoy.</h2>
                                <img className="testimonial-img" src={require("./meet.jpeg")} alt=""/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            <section id="cta">
                <div className="row">
                    <div className="col">
                        <h1 className="" style={{paddingBottom: "0", color:"#28282B"}}>
                            Prepare and Grow with Us... </h1>
                        <h2 className="" style={{color: "#28282B"}}> Start your coding journey with AlgoExpets now! </h2>
                    </div>
                </div>
            </section>

            <footer style={{textAlign: "center"}} id="footer">
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
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    )
}
