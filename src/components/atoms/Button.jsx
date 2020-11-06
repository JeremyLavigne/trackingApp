import React from 'react';
import './Button.css'

// ==============================================================================
// One button : Can be different types (start, more, refresh, etc..), see css.
// ==============================================================================
const Button = ({type, content, onClick}) => {
    return (
        <button className={`button ${type}`} onClick={onClick} >
            {content}
        </button>
    );
}

export default Button;