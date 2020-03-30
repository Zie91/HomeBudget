import React, { Component } from 'react';
import { Alert } from 'react-alert';

export class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    submitLogin(e) {
        alert("Ulogiran")
    };

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Login
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username"></label>
                        <input 
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="username"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password"></label>
                        <input 
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this.submitLogin.bind(this)}
                    >Login
                    </button>
                </div>    
            </div>
        );
    }
}



export default LoginBox
