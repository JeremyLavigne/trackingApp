import React, { useState } from 'react';
import './Header.css';

// Components
import Flag from '../../atoms/flag/Flag'
import Button from '../../atoms/button/Button';
import Filter from '../../molecules/filter/Filter'

// Images
import franceFlag from '../../../images/france-flag.png';
import spainFlag from '../../../images/spain-flag.png';
import swedenFlag from '../../../images/sweden-flag.png';
import ukFlag from '../../../images/uk-flag.png';

// Utils
import initFilters from '../../../utils/initFilters'
import languages from '../../../languages.json'


// ==============================================================================
// Two different Header regarding user action (Home page or List of orders)
// Most part of the logic starts here.
// ==============================================================================
const Header = ({homePage, setHomePage, initialList, listOfFilter, setListOfFilter, searchedId, 
    setSearchedId, setSearchedIdIsActive, dictionary, setDictionary}) => {

    const [ useFilterOn, setUseFilterOn ] = useState(false); // User want to use a filter

    const refresh = () => {
        setListOfFilter(initFilters(initialList));
        setSearchedIdIsActive(false)
        setSearchedId('')
        setUseFilterOn(false);
    }

    const handleChangeSearchId = (e) => {
        setSearchedId(e.target.value)
        if(e.target.value === '') {
            setSearchedIdIsActive(false)
        } else {
            setSearchedIdIsActive(true)
        }
    }

    const pickLanguage = (index) => {
        setDictionary(languages[index])
    }
    
    return (
        <>
            { homePage 
                ?
                <header className="home-header">
                    <Flag country="france" image={franceFlag} onClick={() => pickLanguage(1)}/>
                    <Flag country="spain" image={spainFlag} onClick={() => pickLanguage(3)}/>
                    <Flag country="sweden" image={swedenFlag} onClick={() => pickLanguage(2)}/>
                    <Flag country="uk" image={ukFlag} onClick={() => pickLanguage(0)}/>
                </header>
                :
                <header className="app-in-use-header">
                    <Button 
                        content={`<< ${dictionary.back}`}  type="back" 
                        onClick={() => { setHomePage(true); }} 
                    />
                    <div className="header-menu">
                        <div className="header-search-choice">
                            <Button 
                                content={dictionary.useFilter} type="filter"
                                onClick={() => { setUseFilterOn(!useFilterOn) }} 
                            />
                            <Button
                                content="&#8634;" type="refresh"
                                onClick={refresh} 
                            />
                            <div>
                                <input 
                                    className="search-input" type="number" placeholder={dictionary.parcelID}
                                    value={searchedId}
                                    onChange={handleChangeSearchId}
                                />
                            </div>
                        </div>
                        { useFilterOn
                            ?
                            <div className="all-filters">
                                <Filter 
                                    title={dictionary.status} 
                                    content={[...new Set(initialList.map((item) => item.status))]}
                                    listOfFilter={listOfFilter} setListOfFilter={setListOfFilter} 
                                />
                                <Filter 
                                    title={dictionary.sender}
                                    content={[...new Set(initialList.map((item) => item.sender))]} 
                                    listOfFilter={listOfFilter} setListOfFilter={setListOfFilter}
                                />
                                <Filter 
                                    title={dictionary.location}
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