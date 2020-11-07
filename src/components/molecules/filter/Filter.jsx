import React, { useState } from 'react';
import './Filter.css';

// Components
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';


// ==============================================================================
// One drop down list including a title and a list of checkboxes
// ==============================================================================
const Filter = ({title, content, listOfFilter, setListOfFilter}) => {

    const [ filterOpen, setFilterOpen ] = useState(false); // Display or not the list of checkboxes

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
                        <Input 
                            key={item} type="checkbox" value={item}
                            listOfFilter={listOfFilter} setListOfFilter={setListOfFilter} 
                        />)
                    }
                </div>
                :
                null
            }
        </div>
    );
}

export default Filter;