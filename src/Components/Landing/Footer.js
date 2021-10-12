import React from "react";
import './FooterStyles.css';
import { Link } from 'react-router-dom';

/*
function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <div class="icons">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-youtube"></a>
            
          </div>
          <div>
          <p class="name"> Electricity Billing System &copy; 2021</p>
          </div>
        </div>
        
        <div class="footer-right col-md-4 col-sm-6">
          <h2><img alt="" src={logo} width="30" height="30"/>EBS</h2>
          <p class="menu">
            <a href="#"> Home</a> |
            <a href="#"> About</a> |
            <a href="#"> Contact</a>
          </p>
          
        </div>
      </footer>
    </div>
  );
}*/

function Footer() {
  return (
    <div>
      <section class="footer">
        <div class="social">
          <Link href="#"><i class="fa fa-facebook"></i></Link>
          <Link href="#"><i class="fa fa-instagram"></i></Link>
          <Link href="#"><i class="fa fa-linkedin"></i></Link>
          <Link href="#"><i class="fa fa-youtube"></i></Link>
        </div>

        <ul className= "list">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Help</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
        </ul>
        <p className = "copyright">
          Electricity Billing System @ 2021
        </p>
      </section>
    </div>
  )
}
export default Footer;
