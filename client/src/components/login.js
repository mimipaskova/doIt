import React, { Component } from 'react';
import axios from 'axios';
import RegisterLoginForm from './registerLoginForm';

class Login extends Component {

    constructor(props) {
        super(props);

        this.loginUser = this.loginUser.bind(this);
    }

    loginUser(user) {
        console.log('Loginnnnnn', user);
        axios.post('/api/login', {
            username: user.username,
            password: user.password
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }

    render() {
        return (
        <div className="App">
            <RegisterLoginForm onConfirm={this.loginUser}>
                Login
            </RegisterLoginForm>
        </div>
        );
    }
}

export default Login;
