import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const root = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>,
    root
);