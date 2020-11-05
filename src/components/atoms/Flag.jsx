import React from 'react';
import './Flag.css'

const Flag = ({country, image}) => {
    return (
        <figure className="flag" >
            <img src={image} alt={country} />
        </figure>
    );
}

export default Flag;