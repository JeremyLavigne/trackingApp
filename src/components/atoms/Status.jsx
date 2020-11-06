import React from 'react';
import './Status.css'

// ==============================================================================
// One Status box : Different shape and color for each status.
// ==============================================================================
const Status = ({status}) => {
    return (
        <div className={`status ${status}`} >
            { status === "order-info-received"
                ? <span>...</span>
                : status === "ready-for-pickup"
                    ? <span>&#889;</span>
                    : <span>&#10004;</span>
            }
        </div>
    );
}

export default Status;