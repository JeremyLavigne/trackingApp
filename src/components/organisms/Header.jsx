import React, { useState } from 'react';
import './Header.css';

// Components
import Flag from '../atoms/Flag'
import Button from '../atoms/Button';
import Input from '../atoms/Input'
import Filter from '../molecules/Filter'

// Images
import franceFlag from '../../images/france-flag.png';
import spainFlag from '../../images/spain-flag.png';
import swedenFlag from '../../images/sweden-flag.png';
import ukFlag from '../../images/uk-flag.png';

// Utils
import initFilters from '../../utils/initFilters'


// ==============================================================================
// Two different Header regarding user action (Home page or List of orders)
// ==============================================================================
const Header = ({homePage, setHomePage, initialList, listOfFilter, setListOfFilter}) => {

    const [ useFilterOn, setUseFilterOn ] = useState(false); // User want to use a filter

    const refresh = () => {
        setListOfFilter(initFilters(initialList));
        setUseFilterOn(false);
    }
    
    return (
        <>
            { homePage 
                ?
                <header className="home-header">
                    <Flag country="france" image={franceFlag}/>
                    <Flag country="spain" image={spainFlag}/>
                    <Flag country="sweden" image={swedenFlag}/>
                    <Flag country="uk" image={ukFlag}/>
                </header>
                :
                <header className="app-in-use-header">
                    <Button 
                        content="<< Back" type="back" 
                        onClick={() => { setHomePage(true); }} 
                    />
                    <div className="header-menu">
                        <div className="header-search-choice">
                            <div>
                                <Button 
                                    content="Use Filter" type="filter"
                                    onClick={() => { setUseFilterOn(!useFilterOn) }} 
                                />
                                <Button
                                    content="&#8634;" type="refresh"
                                    onClick={refresh} 
                                />
                            </div>
                            <Input 
                                type="text" value="Search by ID" 
                                listOfFilter={listOfFilter} setListOfFilter={setListOfFilter}
                            />
                        </div>
                        { useFilterOn
                            ?
                            <div className="all-filters">
                                <Filter 
                                    title="Status" 
                                    content={[...new Set(initialList.map((item) => item.status))]}
                                    listOfFilter={listOfFilter} setListOfFilter={setListOfFilter} 
                                />
                                <Filter 
                                    title="Sender"
                                    content={[...new Set(initialList.map((item) => item.sender))]} 
                                    listOfFilter={listOfFilter} setListOfFilter={setListOfFilter}
                                />
                                <Filter 
                                    title="Location"
                                    content={[...new Set(initialList.map((item) => item.location_name))]}
                                    listOfFilter={listOfFilter} setListOfFilter={setListOfFilter}
                                />
                            </div>
                            : null
                        }
                    </div>

                </header>
            }
        </>
    );
}

export default Header;