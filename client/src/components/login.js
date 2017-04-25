import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.onUserChange = this.onUserChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser() {
          axios.post('/api/login', {
              username: this.state.username,
              password: this.state.password
          })
          .then(res => console.log(res));
    }

    onUserChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
        <div className="App">
            <form>
                <input type="text" name="username" value={this.state.username} onChange={this.onUserChange}/>
                <input type="password" name="password" value={this.state.password} onChange={this.onUserChange} />
                <button type="button" onClick={this.loginUser}>Login</button>
            </form>
        </div>
        );
    }
}

export default Login;
