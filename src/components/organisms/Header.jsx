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

const Header = ({homePage, setHomePage}) => {

    const [ useFilterOn, setUseFilterOn ] =useState(false);
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
                            <Button 
                                content="Use Filter" type="filter"
                                onClick={() => { setUseFilterOn(!useFilterOn) }} 
                            />
                            <Input type="text" value="Search by ID" />
                        </div>
                        { useFilterOn
                            ?
                            <div className="all-filters">
                                <Filter title="Status" content={['A', 'B', 'C']} />
                                <Filter title="Sender" content={['A', 'B', 'C']} />
                                <Filter title="Location" content={['A', 'B', 'C']} />
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