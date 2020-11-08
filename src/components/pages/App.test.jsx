import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App.jsx';

describe('<App>', () => {

    it('renders a loading message when opening', () => {
        const { container, getByText } = render(<App />);
        const testElement = getByText('Loading');
        expect(container.contains(testElement));
    });

    it('shows 4 flags on its home page', () => {
        const { container } = render(<App />);
        const flags = container.getElementsByTagName('figure')
        expect(flags.length).to.equal(4);
    });
});

describe('Fetch data from API', () => {

    let testStatus = 0
    // Duplicate here the fetching function, to make things easier..
    const getData = async (endpoint) => {
        try {
            const response = await fetch(endpoint, { mode: "cors" });
            const data = await response.json();
    
            // setInitialList(data);
            // setStatus(1);
            testStatus = 1;
        } catch {
            // setInitialList(fakeList); // Back up plan in case of issue
            // setStatus(2);
            testStatus = 2;
        }
    };

    it('should turn status to 1 if fetching data in a real endpoint', async () => {
        const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840'
        await getData(endpoint)

        expect(testStatus).to.equal(1);
    });

    it('should turn status to 2 if fetching data in a wrong endpoint', async () => {
        const endpoint = 'http://wrong.api.endpoint'
        await getData(endpoint)

        expect(testStatus).to.equal(2);
    });
});
