import React from "react";
import { Redirect } from 'react-router';
import './HeaderStyles.css';
import './FooterStyles.css';
import './ContactUs.css';
import logo from '/Module3/reactjs/electricity-billing-system/src/assests/logo3.jpg';
import { Link } from 'react-router-dom';
class ContactUs extends React.Component {

  constructor(){
    super();
    this.state={
      issubmitted:false
    }
  }

  handleSubmit=(event)=>{
    this.setState({issubmitted:true});
    alert("Thank You!");
    event.preventDefault();
  }

  render(){
    
      if(this.state.issubmitted) {
        return <Redirect to={"/"}/>
    }          

  

  return (
    <div>
      <header>
        
        <div>
          <nav class="navbar collapseOnSelect navbar-expand-lg bg-dark navbar-dark sticky-top">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="logo" style={{ width: "43px", borderRadius: "50%" }} />
            </a>
            <h3 style={{ color: "white" }}>EBS </h3>
            <ul class="navbar-nav">
              <span class="sr-only">(current)</span>
              <li class="nav-item">
                <Link to={"/"} class="nav-link" >HOME</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../RegisterCustomer">REGISTER</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  LOGIN
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">ADMIN</a>
                  <a class="dropdown-item" href="../LoginCustomer.js">CUSTOMER</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../AboutUs.js">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../ContactUs.js">CONTACT US</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div class="ContactUs" data-aos="fade-in">
        <div class="container">
          <h2>Contact Us</h2>
        </div>
      </div>
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">

          <div class="row mt-5">

            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

              </div>

            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">
              
          

              <form action="" onSubmit={e => this.handleSubmit(e)} role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="text-center"><button type="submit" onclick={this.handleSubmit} >Send Message</button></div>
              </form>

            </div>

          </div>

        </div>
      </section>

      <footer>
        <div>
          <section class="footer">
            <div class="social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-youtube"></i></a>
            </div>

            <ul className="list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p className="copyright">
              Electricity Billing System @ 2021
            </p>
          </section>
        </div>
      </footer>
    </div>




  )
}
}
export default ContactUs;