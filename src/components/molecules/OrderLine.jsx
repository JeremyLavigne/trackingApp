import React from 'react';
import './OrderLine.css';

// Components
import Status from '../atoms/Status'
import Button from '../atoms/Button'


// ==============================================================================
// One line of result - contain part of order informations and a 'more' button
// ==============================================================================
const OrderLine = ({type, item, setItemInModal, setShowModal, dictionary}) => {

    const handleClickMore = () => {
        setItemInModal(item);
        setShowModal(true);
    }

    return (
        <div className={ type === "full" ? "order-line" : "order-line short"}>
            { type === "full" &&
            <Status dictionary={dictionary} status={item.status} /> }
            <p>{item.parcel_id}</p>
            <p>{item.sender}, {item.location_name}</p> 
            <p>{item.eta.substr(0, 10)}</p>
            { type === "full" &&
            <Button content="+" type="more" onClick={handleClickMore} /> }
        </div>
    );
}

export default OrderLine;