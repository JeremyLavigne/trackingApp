import React, { useState } from 'react';
import './Input.css'

// ==============================================================================
// One Checkbox, with label. Checkbox control/ are controlled by 'listOfFilters'
// ==============================================================================
const Input = ({type, value, listOfFilter, setListOfFilter}) => {

    // Keep track of users filters
    const [ boxIsChecked, setBoxIsChecked ] = useState(listOfFilter[value]) 

    const checkTheBox = () => {
        const newListOfFilter = {...listOfFilter};
        if (boxIsChecked) {
            newListOfFilter[value] = false;
            setBoxIsChecked(false)
        } else {
            newListOfFilter[value] = true;
            setBoxIsChecked(true)
        }
        setListOfFilter(newListOfFilter);
    }

    return ( 
        <div>
            <label className="container" htmlFor={value}>{value}
                <input 
                    className="input" 
                    type={type} id={value} name={value} 
                    value={value} 
                    checked={boxIsChecked}
                    onChange={checkTheBox}
                />
                <span className="checkmark"></span>
            </label>
        </div>
    );
}

export default Input;