import React, { useState } from 'react';
import './Filter.css';

// Components
import Input from '../atoms/Input';
import Button from '../atoms/Button';


const Filter = ({title, content}) => {

    const [ filterOpen, setFilterOpen ] =useState(false);

    return (
        <div className="filter-drop-down">
            <div className="filter-title">
                <Button 
                    content={title} 
                    type="filter" 
                    onClick={() => { setFilterOpen(!filterOpen) }}
                />
            </div>

            { filterOpen
                ?
                <div className="filter-content">
                    {content.map((item) => 
                        <Input key={item} type="checkbox" value={item} />)
                    }
                </div>
                :
                null
            }
        </div>
    );
}

export default Filter;