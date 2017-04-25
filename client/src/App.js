import React, { Component } from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';

import './App.css';
import axios from 'axios';
import Welcome from './pages/welcome';
import Login from './components/login';
import Register from './components/register';
import StoryContainer from './components/storyContainer';
import AddStory from './components/addStory';

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
      <HashRouter>
          <div>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add" component={AddStory} />
          <Route path="/story" component={StoryContainer} />
          </div>
      </HashRouter>

    );
  }
}

export default App;


/*
      <div className="App">
        <Login />
        <Register />
        <AddStory />
        <StoryContainer />
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>*/