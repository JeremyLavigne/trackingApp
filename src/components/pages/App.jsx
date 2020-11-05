import React, { useState } from 'react';
import './App.css'

// Components
import Button from '../atoms/Button';
import Title from '../atoms/Title';
import OrderLine from '../molecules/OrderLine';
import Header from '../organisms/Header';

import fakeList from '../../fakeDB.json'


// ==============================================================================
// ==================== 'Single page' App, all starts here. =====================
// ==============================================================================
const App = () => {

    const [ homePage, setHomePage ] = useState(true);

    return (
        <main className={homePage ? "main-home" : "main"} >
            <Header homePage={homePage} setHomePage={setHomePage} />

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
                fakeList
                    .sort((a, b) => a.eta > b.eta ? 1 : -1) // Sort by ETA
                    .map((item) => 
                        <OrderLine type="full" key={item.id} item={item} />
                )
            }
        </main>
    );
}

export default App;
