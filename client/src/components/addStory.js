import React, { Component } from 'react';
import axios from 'axios';

class AddStory extends Component {

    constructor(props) {
        super(props);

        this.state = {
           title: '',
           description: ''
        };

        this.onChange    = this.onChange.bind(this);
        this.addStory = this.addStory.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    addStory() {
        console.log(this.state);
        var story = {
            title: this.state.title,
            description: this.state.description
            // userId: ObjectId("58ff2d1c8f9beb3d8cab4bd2")
        }
        console.log(story);
        axios.post('/api/story', story)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }


    render() {
        return (
            <div>
                <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                <input type="text" name="description" value={this.state.description} onChange={this.onChange}/>
                <button type="button" onClick={this.addStory}>Add story</button>
            </div>
        )
    }
}

export default AddStory