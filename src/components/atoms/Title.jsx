import React from 'react';
import './Title.css'

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