import React, { Component } from 'react';

class RegisterLoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '', 
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this._confirm = this._confirm.bind(this);
    }

    _confirm() {
        var user = {
            username: this.state.username,
            password: this.state.password
        };
        console.log(this.state);
        this.props.onConfirm(user);
    }

    onChange(event) {
        console.log(event.target);
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
        <div className="form">

            <form>
                <input type="text" name="username" value={this.state.username} onChange={this.onChange} />
                <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                <button type="button" onClick={this._confirm}>{this.props.children}</button>
            </form>
        </div>
        );
    }
}

export default RegisterLoginForm;