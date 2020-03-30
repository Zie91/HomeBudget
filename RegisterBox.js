import React, { Component } from 'react';
import { Alert } from 'react-alert';


export class RegisterBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };
    }
    submitRegister(e) {
        alert("Registrian")
    };

    render() {
        return (
            
                <div className="inner-container">
                    <div className="header">
                        Registration
                    </div>
                    <div className="box">
                        <div className="input-gruop">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                className="login-input"
                                placeholder="Username"
                                onChange={this.submitRegister.bind(this)}
                            />
                        </div>
                        <div className="input-gruop">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="login-input"
                                placeholder="Email"
                                onChange={this.submitRegister.bind(this)}
                            />
                        </div>
                        <div className="input-gruop">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="login-input"
                                placeholder="Password"
                                onChange={this.submitRegister.bind(this)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="login-btn"
                            onClick={this.submitRegister.bind(this)}
                        >Register</button>
                    </div>
                </div>
           
        )
    }
}

export default RegisterBox
