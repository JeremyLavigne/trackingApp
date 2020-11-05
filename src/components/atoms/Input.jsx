import React from 'react';
import './Input.css'

const Input = ({type, value}) => {
    return ( 
        <div>
            { type === "checkbox" 
            ?
            <label className="container" htmlFor={value}>{value}
                <input 
                    className="input" 
                    type={type} id={value} name={value} 
                    value={value} 
                />
                <span className="checkmark"></span>
            </label>
            :
            <p>
                <input className="search-input" type={type} placeholder={value} />
            </p>
        }
        </div>
    );
}

export default Input;