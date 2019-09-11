import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './../common/Input';
import Form from './../common/Form';
import './LoginForm.scss';

class LoginForm extends Form {

    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = () => {
        console.log('Submitted');
    }

    render() {
        const { username, password } = this.state.data;
        const { errors } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name='username'
                        label='Username'
                        value={username}
                        error={errors.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        name='password'
                        label='Password'
                        value={password}
                        error={errors.password}
                        onChange={this.handleChange}
                    />
                    <button
                        className="btn btn-primary"
                        disabled={this.validate()}
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;