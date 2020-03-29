
import React, { Component } from "react";

import axios from 'axios';

class TestApp extends Component {

    constructor(){
        super();
        this.state = {
            response: "",
        }
    }
    pingToServer = () => {
        console.log("function is working!!!")
        axios.get('/api/test').then( res => {
            console.log(res);
            console.log(res.data);
            console.log(res.data.value);
            this.setState({ response: res.data.value })
        })    
    }

    render(){
        return(
            <div className="App">
                <h1>Zile i Cuta bacaju bombe!!!!</h1>
                <button onClick={ this.pingToServer }>Ping</button>
                <h2>{ this.state.response }</h2>
            </div>
        );
        
    };
}

export default TestApp;