import React from 'react';

const Flag = ({country}) => {
    return (
        <figure className="flag" >
            <img src={country} alt={country} />
        </figure>
    );
}

export default Flag;