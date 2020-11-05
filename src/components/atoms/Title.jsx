import React from 'react';
import './Title.css'

const Title = ({content, type}) => {
    return (
        <h2 className={`title ${type}`} >
            {content}
        </h2>
    );
}

export default Title;