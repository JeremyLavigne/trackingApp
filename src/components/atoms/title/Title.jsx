import React from 'react';
import './Title.css'

// ==============================================================================
// Only for welcome title actually, but can be modified if need later.
// ==============================================================================
const Title = ({content, userName, type}) => {
    return (
        <h2 className={`title ${type}`} >
            {content}
            <br />
            {userName}
        </h2>
    );
}

export default Title;