import React from 'react';
import './Filter.css';

// Components
import Input from '../atoms/Input';
import Button from '../atoms/Button';


const Filter = ({title, content}) => {
    return (
        <div className="filter-drop-down">
            <span className="filter-title">
                {title}
                <Button 
                    content="&#x2193;" 
                    type="open" 
                    onClick={() => {console.log('open filter-content')}}
                />
            </span>

            <span className="filter-content">
                {content.map((item) => 
                    <Input key={item} type="checkbox" value={item} />)
                }
            </span>
        </div>
    );
}

export default Filter;