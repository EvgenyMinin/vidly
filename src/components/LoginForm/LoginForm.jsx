import React, { Component } from 'react';
import Input from './../common/Input';
import './LoginForm.scss';

class LoginForm extends Component {

    state = {
        account: {
            username: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account};
        account[input.id] = input.value;
        this.setState({
            account
        });
    }

    render() {
        const { username, password } = this.state.account;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name='username'
                        label='Username'
                        value={username}
                        onChange={this.handleChange}
                    />
                    <Input
                        name='password'
                        label='Password'
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;