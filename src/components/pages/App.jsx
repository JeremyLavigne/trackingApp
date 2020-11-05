import React from 'react';

// Components
import Button from '../atoms/Button';
import Flag from '../atoms/Flag';
import Status from '../atoms/Status';
import Title from '../atoms/Title';


const App = () => {
    return (
        <div>
            <p>Let's just test our atoms components for now</p>
            <h2>Buttons</h2>
            <Button content="Start" type="start" onClick={() => {console.log('start')}} />
            <Button content="<< Back" type="back" onClick={() => {console.log('back')}} />
            <Button content="+" type="more" onClick={() => {console.log('more')}} />
            <Button content="Use Filter" type="filter" onClick={() => {console.log('filter')}} />

            <h2>Flags</h2>
            <Flag country="france" />
            <Flag country="spain" />
            <Flag country="sweden" />
            <Flag country="uk" />

            <h2>Status</h2>
            <Status status="order-info-received" />
            <Status status="ready-for-pickup" />
            <Status status="delivered" />

            <h2>Title</h2>
            <Title content="Nice to see you again" type="welcome" />

        </div>
    );
}

export default App;