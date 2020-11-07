import React from 'react';
import './Status.css'

// ==============================================================================
// One Status box : Different shape and color for each status.
// ==============================================================================
const Status = ({status, dictionary}) => {
    return (
        <>
            <div className={`status ${status}`} >
                { status === "order-info-received"
                    ? <span>...</span>
                    : status === "ready-for-pickup"
                        ? <span>&#889;</span>
                        : status === "on-the-way"
                            ? <span>&#10132;</span>
                            : <span>&#10004;</span>
                }
            </div>
            <div className="tool-tip-status">{dictionary[status]}</div>
        </>
    );
}

export default Status;