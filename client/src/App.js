import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/login';
import Register from './components/register';

class App extends Component {

  state = {users: []}

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
    axios.get('/users')
      // .then(res => res.data)
      .then(res => this.setState({ users:res.data }));
  }

  render() {
    return (
      <div className="App">
        <Login />
        <Register />
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
