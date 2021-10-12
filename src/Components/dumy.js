import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isValidUser: '',
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        let loginPayload =
        {
            userName: this.state.username,
            password: this.state.password
        }


        axios.post("http://localhost:8082/user/login", loginPayload).then(resp => {
            console.log(resp);

            if (resp.status === 200) {
                let user = {
                    "id": resp.data.id,
                    "userName": resp.data.userName,
                    "password": resp.data.password,
                    "customerName": resp.data.customerName,
                    "customerAddress": resp.data.customerAddress,
                    "customerPhone": resp.data.customerPhone,
                    "customerEmail": resp.data.customerEmail,
                }
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    isValidUser: true
                })
                this.props.history.push('/user/dashboard');
                window.location.reload();
            }

        }).catch(error => {
            console.log(error.response);

            if (error.response.status === 401) {
                this.setState({
                    isValidUser: false
                })
            }

        });

        event.preventDefault();
    }

    render() {

        // if (this.state.isValidUser === true) {
        //     return <Redirect to="/user/dashboard" />;
        // }



        return (
            <div className="container-fluid" >
                {

                    this.state.isValidUser === false && <h3>Invalid username or password</h3>
                }
                < h2 > Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Enter username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter product price" id="productPrice" />
                </div>
                <div>
                    <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>
                </div>
            </div >
        )
    }

}

export default Login;
