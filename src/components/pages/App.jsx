import React, { useState } from 'react';
import './App.css'

// Components
import Button from '../atoms/Button';
import Flag from '../atoms/Flag';
import Status from '../atoms/Status';
import Title from '../atoms/Title';
import Input from '../atoms/Input';

import Filter from '../molecules/Filter';
import OrderLine from '../molecules/OrderLine';

import Header from '../organisms/Header';


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
                : null
            }

        </main>
    );
}

export default App;


{/*
<Button content="+" type="more" onClick={() => {console.log('more')}} />


<h2>Status</h2>
<Status content="..." status="order-info-received" />
<Status content="&#889;" status="ready-for-pickup" />
<Status content="&#10004;" status="delivered" />



<h2>Order Line</h2>
<OrderLine type="full" content={ {id: 23, status: "delivered", eta:"tomorrow", sender: "senders name", userName: "user name", location: "town"} } />
<OrderLine type="half" content={ {status: "delivered", sender: "senders name", userName: "user name"} } /> */}