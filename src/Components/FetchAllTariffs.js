import React from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '/Module3/reactjs/electricity-billing-system/src/assests/logo3.jpg';
import {fetchAllTariffs} from '../store/actions/TariffActions';
import './style.css';

class FetchAllTariffs extends React.Component {

    componentDidMount() {
        this.props.fetchAll()
    }


    render() {
        return (
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
            <section>
            <div className="table-responsive" class="margin">
                <table className="table table-bordered" id="tb" style={{border: '2px solid black'
                }}>
                    <thead >
                        <tr>
                            <th>Tariff Id</th>
                            <th>RateperUnit</th>
                            <th>TariffName</th>
                            <th>TariffType</th>
                            <th>unitSlab</th>
                            <th></th>
                            <th></th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.plist.map(tariff =>

                                <tr>
                                    <td>{tariff.tariffId}</td>
                                    <td>{tariff.rateperUnit}</td>
                                    <td>{tariff.tariffName}</td>
                                    <td>{tariff.tariffType}</td>
                                    <td>{tariff.unitSlab}</td>
                                    <td><Link to={"/update/"+tariff.tariffId} class="button3">Update</Link></td>
                                    <td><Link to={"/delete/"+ tariff.tariffId} class="link" class="button1">Delete</Link></td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
            </section>
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
}

const mapStateToProps = (state) => {
    return {
        plist : state.tariffReducer.tariffs,        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAll : () => dispatch(fetchAllTariffs())
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FetchAllTariffs);
