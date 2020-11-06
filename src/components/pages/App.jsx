import React, { useEffect, useState } from 'react';
import './App.css'

// Components
import Button from '../atoms/Button';
import Title from '../atoms/Title';
import OrderLine from '../molecules/OrderLine';
import Header from '../organisms/Header';

// Utils
import initialList from '../../fakeDB.json'
import initFilters from '../../utils/initFilters'
import applyFilters from '../../utils/applyFilters'
import checkIfOneFilterIsActive from '../../utils/checkIfOneFilterIsActive'


// ==============================================================================
// ==================== 'Single page' App, all starts here. =====================
// ==============================================================================
const App = () => {

    const [ homePage, setHomePage ] = useState(true); // Are we on 'Home page'
    const [ listOfFilter, setListOfFilter ] = useState(initFilters(initialList)); // see utils/initFilters
    const [ atLeastOneFilterIsActive, setAtLeastOneFilterIsActive ] = useState(false);

    useEffect(() => {
        if (checkIfOneFilterIsActive(listOfFilter)) {
            setAtLeastOneFilterIsActive(true);
        } else {
            setAtLeastOneFilterIsActive(false);
        }
    }, [listOfFilter]) // Check every time list of filters changes.

    return (
        <main className={homePage ? "main-home" : "main"} >
            <Header 
                initialList={initialList}
                homePage={homePage} setHomePage={setHomePage}
                listOfFilter={listOfFilter} setListOfFilter={setListOfFilter}
            />

            {homePage 
                ? 
                <div id="home-page-section">
                    <Title content="Nice to see you again" userName="user name" type="welcome" />
                    <Button 
                        content="Start" type="start" 
                        onClick={() => { setHomePage(false); }} 
                    />
                </div>
                :
                <div id="order-list-section">
                    { initialList
                        .filter((item) => atLeastOneFilterIsActive ? applyFilters(item, listOfFilter) : true)
                        .sort((a, b) => a.eta > b.eta ? -1 : 1) // Sort by ETA
                        .map((item) => 
                            <OrderLine type="full" key={item.id} item={item} />
                        )
                    }
                </div>
            }
        </main>
    );
}

export default App;
