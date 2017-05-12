import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userProfile: ''
        };

        // this.fetchProfile = this.fetchProfile.bind(this);
    }

    componentDidMount() {
        console.log(this.state);
        axios.get('/api/profile')
        .then(res => {console.log(res.data); return this.setState({userProfile: res.data})});
        console.log(this.state);
        
    }

    logoutUser() {
        console.log('logout');
        axios.post('/api/logout')
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                Email: {this.state.userProfile.email}
                <button type="button" onClick={this.logoutUser}>Logout</button>
            </div>
        )
    }
}

export default Profile