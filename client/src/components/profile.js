import React, { Component } from 'react';
import axios from 'axios';
import Story from './story';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userProfile: '',
            stories: [],
            content: ''
        };

        this.getStories = this.getStories.bind(this);
        this.fetchStories = this.fetchStories.bind(this);
    }

    componentDidMount() {
        console.log(this.state);
        axios.get('/api/profile')
        .then(res => {console.log(res.data); return this.setState({userProfile: res.data})})
        .then(() => this.fetchStories(this.state.userProfile._id));
        console.log(this.state);
    }

    logoutUser() {
        console.log('logout');
        axios.post('/api/logout')
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }

    fetchStories(userId) {
        console.log(userId);
        axios.get('/api/story?userId=' + userId)
        .then(res => this.setState({stories: res.data}));
    }

    getStories() {
        var content = this.state.stories.map(story => {
            return <Story key={story._id} title={story.title} description={story.description} createdDate={story.createdDate} id={story._id} userId={story.userId}/>
        });
        this.setState({content});
    }

    render() {
        return (
            <div>
                Email: {this.state.userProfile.email}
                <div className="buttons">
                    <RaisedButton type="button" containerElement={<Link to="/story" />}>Home</RaisedButton>
                    <RaisedButton type="button" onClick={this.getStories}>My stories</RaisedButton>
                    <RaisedButton type="button" onClick={this.logoutUser}>Logout</RaisedButton>
                </div>
                <div className="App">
                    {this.state.content}
                </div>
            </div>
        )
    }
}

export default Profile