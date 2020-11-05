import React from 'react';
import './OrderLine.css';

// Components



const Filter = ({type, content}) => {
    return (
        <div className="order-line">
            {type}
            {content.sender}
        </div>
    );
}

export default Filter;