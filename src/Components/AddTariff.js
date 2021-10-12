import React, { useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '/Module3/reactjs/electricity-billing-system/src/assests/logo3.jpg';
import './style.css';
function AddTariff() {

   
    
    const [rateperUnit, setRateperUnit] = useState('');
    const [tariffName, setTariffName] = useState('');
    const [tariffType, setTariffType] = useState('');
    const [unitSlab, setUnitsLab] = useState('');
    const [submitted, setSubmitted] = useState(false);

    

    const handleSubmit = (event) => {
       
        let payload = {
            rateperUnit : rateperUnit,
            tariffName : tariffName,
            tariffType : tariffType,
            unitSlab : unitSlab        
        }
        console.log(payload);
        
        axios.post("http://localhost:8080/tariff/addTariff", payload).then(resp=>setSubmitted(true));
        console.log("tariff saved :"+payload.tariffName);
        alert("Tariff Added");
        event.preventDefault();
    }

    return (
        
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
                        <Link class="nav-link" href="#">LOGOUT</Link>
                    </li>
                </ul>
            </nav>
            </div>
            </section>
            </div>
            <div>
            <section class="body"  id="form">
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
           
        <div className="container-fluid"class="margin">
            {
                submitted && <Redirect to="/fetchall" />           }
        <h2 id="h1">Add Tariff</h2>
        <div class="form-group" class="add" >
                    <label for="rateperUnit">rateperUnit</label>
                    <input type="text" name="rateperUnit" class="form-control" value={rateperUnit} onChange={(e) => setRateperUnit(e.target.value)}  placeholder="Enter rateperUnit" id="rateperUnit" />
                </div>

                <div class="form-group" class="add">
                    <label for="tariffName">Tariff Name</label>
                    <select id="TariffName" name="TariffName" value={tariffName} onChange={(e) => setTariffName(e.target.value)} className="form-control" placeholder="Enter Tariff Name " id="TariffName"  >
                    <option value=" Select"> Select </option>
                    <option value=" Domestic"> Domestic </option>
                    <option value=" Industrial"> Industrial  </option>
                    <option value=" Commerical  Pay"> Commerical </option>
                </select>
                </div>

                <div class="form-group" class="add">
                    <label for="tariffType">Tariff Type</label>
                    <select id="TariffType" name="TariffType" value={tariffType} onChange={(e) => setTariffType(e.target.value)} className="form-control" placeholder="Enter Tariff Type " id="TariffType"  >
                    <option value=" Select"> Select </option>
                    <option value=" Urban"> Urban </option>
                    <option value=" Rural"> Rural</option>
                </select>
                </div>
                
                <div class="form-group"class="add">Tariff
                    <label for="unitSlab">unitSlab</label>
                    <input type="text" name="unitSlab" class="form-control" value={unitSlab} onChange={(e)=> setUnitsLab(e.target.value)} placeholder="Enter unitSlab" id="unitSlab" />
                </div>
                <div>
                    <button class="button" value="submit" id="submit"onClick={handleSubmit}>Add</button>
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
export default AddTariff;