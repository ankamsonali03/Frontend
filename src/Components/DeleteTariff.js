import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '/Module3/reactjs/electricity-billing-system/src/assests/logo3.jpg';
import { Redirect } from 'react-router-dom';
import './style.css';

class DeleteTariff extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tariff : undefined,
            tariffId : '',
            rateperUnit : '',
            tariffName : '',
            tariffType : '',
            unitSlab : '',
            isDelete : false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/tariff/GetTariffById/'+this.props.match.params.id)
        .then(resp => this.setState({
            tariff: resp.data
          
        })).then(p=> this.setState({
            tariffId: this.state.tariff.tariffId,
            rateperUnit : this.state.tariff.rateperUnit,
            tariffName : this.state.tariff.tariffName,
            tariffType: this.state.tariff.tariffType,
            unitSlab:this.state.tariff.unitSlab
        }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
       
        let tariff = {
            "tariffId":this.state.tariffId,
            "rateperUnit": this.state.rateperUnit,
            "tariffName": this.state.tariffName,
            "tariffType": this.state.tariffType,
            "unitSlab": this.state.unitSlab
        }        
        axios.delete("http://localhost:8080/tariff/deleteTariff/"+tariff.tariffId, tariff).then(this.setState({
            isDelete :true
        }));
        alert("Tariff deleted");     
       
        event.preventDefault();
    }

    render() {
        

        if(this.state.isDelete) {
            return <Redirect to={"/fetchall"}/>
        }

        return(
            <div >
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
                        <Link class="nav-link" >LOGOUT</Link>
                    </li>
                </ul>
            </nav>
            </div>
            </section>
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
            <div className="container-fluid" class="margin" >
                <h2 id="h1">Delete Tariff</h2>
                <div class="form-group1" class="add">
                    <label for="tariffId">tariffId</label>
                    <input type="text" name="tariffId" value={this.state.tariffId} class="form-control" onChange={this.handleChange}  id="tariffId" disabled/>
                </div>
                <div class="form-group1" class="add">
                    <label for="rateperUnit">rateperUnit</label>
                    <input type="text" name="rateperUnit" class="form-control" value={this.state.rateperUnit} onChange={this.handleChange} id="rateperUnit" disabled/>
                </div>

                <div class="form-group1" class="add">
                    <label for="tariffName">Tariff Name</label>
                    <input type="text" name="tariffName" class="form-control" value={this.state.tariffName} onChange={this.handleChange}  id="TariffName"disabled/>
                </div>

                <div class="form-group1" class="add">
                    <label for="tariffType">Tariff Type</label>
                    <input type="text" name="tariffType" class="form-control" value={this.state.tariffType}  onChange={this.handleChange}id="TariffType" disabled/>
                </div>
                
                <div class="form-group1" class="add">Tariff
                    <label for="unitSlab">unitSlab</label>
                    <input type="text" name="unitSlab" class="form-control" value={this.state.unitSlab} onChange={this.handleChange} id="unitSlab" disabled/>
                </div>
                <div>
                    <button onClick={this.handleSubmit} class="button">Delete</button>
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
            </div>
        )
    }

}

export default DeleteTariff;