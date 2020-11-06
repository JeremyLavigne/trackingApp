import React, { useState } from 'react';
import './Input.css'

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
            { type === "checkbox" 
            ?
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
            :
            <p>
                <input className="search-input" type={type} placeholder={value} />
            </p>
        }
        </div>
    );
}

export default Input;