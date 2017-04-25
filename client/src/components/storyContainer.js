import React, { Component } from 'react';
import axios from 'axios';
import Story from './story';

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
            return <Story key={story._id} title={story.title} description={story.description} createdDate={story.createdDate} />
        });
        this.setState({content});
    }

    render() {
        console.log(this.state);
        return (
        <div className="App">
            <button type="button" onClick={this.getStories}>Get all stories</button>
            <div>
                {this.state.content}
            </div>
            
        </div>
        );
    }
}

export default StoryContainer;
