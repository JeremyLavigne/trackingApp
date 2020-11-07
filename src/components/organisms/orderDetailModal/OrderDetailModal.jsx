import React, { useState } from 'react';
import './OrderDetailModal.css';

// Components
import Button from '../../atoms/button/Button';
import OrderLine from '../../molecules/orderLine/OrderLine';


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
                <OrderLine className="short-line" key={item.id} item={item} type="half" />

                <div className="main-data" >
                    <p><span className="subtitle-infos">{dictionary.parcelID}</span> : {item.parcel_id}</p>
                    <p><span className="subtitle-infos">{dictionary.status}</span> : {dictionary[item.status]}</p>
                    <p><span className="subtitle-infos">{dictionary.verification}</span> : {item.verification_required ? dictionary.yes : dictionary.no}</p>
                    <p><span className="subtitle-infos">{dictionary.etaFull}</span> : {item.eta.substr(0, 10)}, {item.eta.substr(11, 5)}</p>
                    <p><span className="subtitle-infos">{dictionary.userName}</span> : {item.user_name}</p>
                    <p><span className="subtitle-infos">{dictionary.userPhone}</span> : {item.user_phone}</p>
                    <p><span className="subtitle-infos">{dictionary.lastUpdate}</span> : {item.last_updated.substr(0, 10)}, {item.last_updated.substr(11, 5)}</p>
                    <p><span className="subtitle-infos">{dictionary.notes}</span> : {item.notes}</p>
                </div>

                <div className="main-data2">
                    <div id="frame-container">
                        <iframe className="frame" src={googleMaps}></iframe>
                        <div className="zoom-buttons">
                            <Button content="-" type="zoom" onClick={() => setZoom(zoom - 1)} />
                            <Button content="+" type="zoom" onClick={() => setZoom(zoom + 1)} />
                        </div>
                    </div>
                    {/* <div className="notes">
                        {item.notes}
                    </div> */}
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
