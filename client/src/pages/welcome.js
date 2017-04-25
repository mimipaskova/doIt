import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {

    render() {
        return (
        <div>
            <div className="top-menu">
            <ul>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/register">Register</Link>
                </li>
                <li>
                <Link to="/story">Stories</Link>
                </li>
            </ul>
            </div>
      </div>
        );
    }
}

export default Welcome;
