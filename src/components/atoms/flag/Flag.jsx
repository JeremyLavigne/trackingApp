import React from 'react';
import './Flag.css'

// ==============================================================================
// One Flag
// ==============================================================================
const Flag = ({country, image, onClick}) => {
    return (
        <figure className="flag" onClick={onClick}>
            <img src={image} alt={country} />
        </figure>
    );
}

export default Flag;