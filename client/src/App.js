import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
