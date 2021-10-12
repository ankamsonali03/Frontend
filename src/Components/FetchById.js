import React from 'react';
import axios from 'axios';
import logo from '/Module3/reactjs/electricity-billing-system/src/assests/logo3.jpg';
import { Link } from 'react-router-dom';
import './style.css';
class FetchById extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tariffId: '',
            tariff: undefined,
            isSubmitted:''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        axios.get("http://localhost:8080/tariff/GetTariffById/" + this.state.tariffId).then(resp =>{console.log(resp);
        
        if(resp.status===200){
            this.setState({
                tariff: resp.data 
        })
    
    }
       
    }).catch(error=>{
        console.log(error.response);
        if (error.response.status === 404) {
            this.setState({
                isSubmitted: false
            })
            alert("Tariff Not Exisiting");
        }
      

    });

        event.preventDefault();

    }


    render() {
        return (
            <div>
            <div>
            <section>
            <div data-component="navbar">
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
                        <Link to={"/ContactUs"} class="nav-link">CONTACT US</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="#">LOGOUT</Link>
                    </li>
                </ul>
            </nav>
            </div>
            </section>
            </div>
            <div>
            <section>
            <div class="sidebar">
                <Link to={"/Add"} class="active">Add Tariff</Link>
                <Link to={"/search"}>Search Tariff</Link>
                <Link to={"/fetchall"}>Update Tariff</Link>
                <Link to={"/fetchall"}>Delete Tariff</Link>
                <Link to={"/view"}>View All</Link>
            </div>
            </section>
            </div>
            <div>
            <section>
            <div className="container-fluid" class="margin">
                <h1 id="h1">Search Tariff </h1>
                <div class="form-group" class="add">
                    <label for="tariffId">TariffId</label>
                    <input type="text" name="tariffId" value={this.state.tariffId} onChange={this.handleChange} class="form-control" placeholder="Enter tariff id" />
                </div>
                <div>
                    <button onClick={this.handleSubmit} class="button">Search</button>
                </div>
                <div>
                    {
                        this.state.tariff !== undefined ?
                            <div>
                                <table className="table table-bordered" id="tb" style={{border: '2px solid black'
                }}>
                                    <thead>
                                        <tr>
                                            <th>tariffId</th>
                                            <th>rateperUnit</th>
                                            <th>tariffName</th>
                                            <th>tariffType</th>
                                            <th>unitSlab</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.tariff.tariffId}</td>
                                            <td>{this.state.tariff.rateperUnit}</td>
                                            <td>{this.state.tariff.tariffName}</td>
                                            <td>{this.state.tariff.tariffType}</td>
                                            <td>{this.state.tariff.unitSlab}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            : <p id="h1"></p>
                    }
                </div>
                

            </div>
            </section>
            </div>
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
            </div>

        )
    }
}

export default FetchById;