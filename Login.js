import React, { Component } from 'react';
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="root-container">
                    <div className="box-container">
                        <div className="login">
                            Login
                        </div>
                        <div className="register">
                            Register
                        </div>
                    </div>

                </div>
                <LoginBox />
                <RegisterBox />
            </div>
        )
    }
}

export default Login
