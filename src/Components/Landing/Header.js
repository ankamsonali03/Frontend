import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import logo from '/Module3/reactjs/electricity-billing-system/src/assests/logo3.jpg'
import coro1 from '/Module3/reactjs/electricity-billing-system/src/assests/Coro-img1.jpg'
import coro2 from '/Module3/reactjs/electricity-billing-system/src/assests/Coro-img2.jpg';
import coro3 from '/Module3/reactjs/electricity-billing-system/src/assests/Coro-img4.jpg';
import { Link } from 'react-router-dom';
import './HeaderStyles.css';
function Header() {
    return (
        <div>
            <nav class="navbar collapseOnSelect navbar-expand-lg bg-dark navbar-dark sticky-top">
                <Link class="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={{ width: "43px" , borderRadius: "50%" }} />
                </Link>
                <h3 style={{ color: "white" }}>EBS </h3>
                <ul class="navbar-nav">
                    <span class="sr-only">(current)</span>
                    <li class="nav-item">
                        <Link to={"/"} class="nav-link" >HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="#">ABOUT US</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/ContactUs"} class="nav-link" >CONTACT US</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="#">LOGOUT</Link>
                    </li>
                </ul>
            </nav>

            <Carousel>
                <Carousel.Item>
                    <img
                        width={900}
                        height={500}
                        className="d-block w-100"
                        src={coro1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900}
                        height={500}
                        className="d-block w-100"
                        src={coro2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900}
                        height={500}
                        className="d-block w-100"
                        src={coro3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section>
                <div class="container">
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <Link to={"/Add"}>Click Here</Link>
                            </div>
                        </div>
                        <div class="face face2">
                        <h4>Add Tariff</h4>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <Link to={"/fetchall"} >Click Here</Link>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>Update Tariff</h4>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <Link to={"/fetchall"}>Click Here</Link>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>Delete Tariff</h4>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <Link to={"/view"}>Click Here</Link>
                            </div>
                        </div>
                        <div class="face face2">
                            <h4>View All</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
export default Header;