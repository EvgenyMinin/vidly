import React from 'react';
import './Input.scss';

const Input = ({ name, label, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                className="form-control"
                id={name}
                type='text'
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
 
export default Input;