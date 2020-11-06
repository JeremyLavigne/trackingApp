import React from 'react';
import './OrderLine.css';

// Components
import Status from '../atoms/Status'
import Button from '../atoms/Button'


// ==============================================================================
// One line of result - contain part of order informations and a 'more' button
// ==============================================================================
const OrderLine = ({item}) => {
    return (
        <div className="order-line">
            <Status status={item.status} />
            <p>{item.parcel_id}</p>
            <p>{item.sender}, {item.location_name}</p> 
            <p>{item.eta.substr(0, 10)}</p>
            <Button content="+" type="more" onClick={() => {console.log('more')}} />
        </div>
    );
}

export default OrderLine;