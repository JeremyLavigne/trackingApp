import React from 'react';

// Components
import Button from '../atoms/Button';
import Flag from '../atoms/Flag';
import Status from '../atoms/Status';
import Title from '../atoms/Title';
import Input from '../atoms/Input';

import Filter from '../molecules/Filter'

// Images
import franceFlag from '../../images/france-flag.png';
import spainFlag from '../../images/spain-flag.png';
import swedenFlag from '../../images/sweden-flag.png';
import ukFlag from '../../images/uk-flag.png';


const App = () => {
    return (
        <div>
            <h1>Let's just test our atoms components for now</h1>
            <h2>Buttons</h2>
            <Button content="Start" type="start" onClick={() => {console.log('start')}} />
            <Button content="<< Back" type="back" onClick={() => {console.log('back')}} />
            <Button content="+" type="more" onClick={() => {console.log('more')}} />
            <Button content="Use Filter" type="filter" onClick={() => {console.log('filter')}} />

            <h2>Flags</h2>
            <Flag country="france" image={franceFlag}/>
            <Flag country="spain" image={spainFlag}/>
            <Flag country="sweden" image={swedenFlag}/>
            <Flag country="uk" image={ukFlag}/>

            <h2>Status</h2>
            <Status content="..." status="order-info-received" />
            <Status content="&#889;" status="ready-for-pickup" />
            <Status content="&#10004;" status="delivered" />

            <h2>Title</h2>
            <Title content="Nice to see you again" type="welcome" />

            <h2>Input</h2>
            <Input value="Name" type="checkbox"/>

            <h1>Let's move on molecules now!</h1>
            <h2>Filter</h2>
            <Filter title="User Name" content={['A', 'B', 'C']} />

        </div>
    );
}

export default App;