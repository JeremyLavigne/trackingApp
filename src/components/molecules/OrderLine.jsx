import React from 'react';
import './OrderLine.css';

// Components
import Status from '../atoms/Status'
import Button from '../atoms/Button'


const Filter = ({item}) => {
    return (
        <div className="order-line">
            <Status status={item.status} />
            <p>{item.sender}</p>
            <p>{item.location_name}</p> 
            <p>{item.eta.substr(0, 10)}</p>
            <Button content="+" type="more" onClick={() => {console.log('more')}} />
        </div>
    );
}

export default Filter;