import React from 'react';
import './Button.css'

const Button = ({type, content, onClick}) => {
    return (
        <button className={`button ${type}`} onClick={onClick} >
            {content}
        </button>
    );
}

export default Button;