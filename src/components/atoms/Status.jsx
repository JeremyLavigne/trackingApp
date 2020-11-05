import React from 'react';
import './Status.css'

const Status = ({content, status}) => {
    return (
        <div className={`status ${status}`} >
            {content}
        </div>
    );
}

export default Status;