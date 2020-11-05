import React from 'react';
import './Input.css'

const Input = ({type, value}) => {
    return (
        <div>
            <label className="container" htmlFor={value}>{value}
                <input 
                    className="input" 
                    type={type} id={value} name={value} 
                    value={value} 
                />
                <span className="checkmark"></span>
            </label>
        </div>
    );
}

export default Input;