import React, { Component } from 'react';
import axios from 'axios';
import Story from './story';
import { Link } from 'react-router-dom';

class StoryContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stories: [],
            content: ''
        };

        this.getStories = this.getStories.bind(this);
        this.fetchStories = this.fetchStories.bind(this);
    }

    componentDidMount() {
        this.fetchStories();
    }

    fetchStories() {
        axios.get('/api/story')
        .then(res => this.setState({stories: res.data}));
    }

    getStories() {
        var content = this.state.stories.map(story => {
            return <Story key={story._id} title={story.title} description={story.description} createdDate={story.createdDate} id={story._id} />
        });
        this.setState({content});
    }

    render() {
        console.log(this.state);
        return (
        <div className="App">
            <button type="button" onClick={this.getStories}>Get all stories</button>
             <Link to="/add">Add story</Link>
            <div>
                {this.state.content}
            </div>
            
        </div>
        );
    }
}

export default StoryContainer;
