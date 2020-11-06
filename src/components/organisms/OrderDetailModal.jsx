import React, { useState } from 'react';
import './OrderDetailModal.css';

// Components
import Button from '../atoms/Button';
import OrderLine from '../molecules/OrderLine';


// ==============================================================================
// One order details, appears as a modal on screen, click somewhere else to close
// ==============================================================================
const OrderDetailModal = ({item, setShowModal, dictionary}) => {

    const [zoom, setZoom] = useState(4)
    const options = `&output=embed&z=${zoom}`
    const googleMaps = `https://maps.google.com/maps?q=${item.location_coordinate_latitude},${item.location_coordinate_longitude}&hl=en&z=14&amp${options}`;

    return (
        <div>
            <div className="modal" onClick={() => {setShowModal(false);}}></div>
            <section className="modal-main">
                <OrderLine  className="short-line" key={item.id} item={item} type="half" />

                <div className="main-data" >
                    <p>{dictionary.parcelID} : {item.parcel_id}</p>
                    <p>{dictionary.status} : {item.status}</p>
                    <p>{dictionary.verification} : {item.verification_required ? dictionary.yes : dictionary.no}</p>
                    <p>{dictionary.etaFull} : {item.eta}</p>
                    <p>{dictionary.userName} : {item.user_name}</p>
                    <p>{dictionary.userPhone} : {item.user_phone}</p>
                    <p>{dictionary.lastUpdate} : {item.last_updated}</p>
                </div>

                <div className="main-data2">
                    <div id="frame-container">
                        <iframe className="frame" src={googleMaps}></iframe>
                        <div className="zoom-buttons">
                            <Button content="-" type="zoom" onClick={() => setZoom(zoom - 1)} />
                            <Button content="+" type="zoom" onClick={() => setZoom(zoom + 1)} />
                        </div>
                    </div>
                    <div className="notes">
                        {item.notes}
                    </div>
                </div>
                <Button 
                    content={dictionary.close} type="back" 
                    onClick={() => {setShowModal(false);}} 
                />
            </section>
        </div>
    );
}

export default OrderDetailModal;
