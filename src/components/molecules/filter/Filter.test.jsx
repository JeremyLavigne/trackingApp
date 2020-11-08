import React from 'react';
import Filter from './Filter.jsx';
import { render, act } from '@testing-library/react'
import { expect } from 'chai';

describe('<Filter>', () => {

    const testContent = ['A', 'B', 'C'];
    let testListOfFilter = {}
    const testSetListOfFilter = (newList) => {
        testListOfFilter = newList;
    }
    const { container, getByText } = render(<Filter 
        title="Test Filter" content={testContent} 
        listOfFilter={testListOfFilter} setListOfFilter={testSetListOfFilter}
    />);

    it('renders the expecting title', () => {
        const testElement = getByText('Test Filter');
        expect(container.contains(testElement));
    });

    it('does not render content initially', () => {
        const hypotheticalInputs = container.getElementsByTagName('input')
        expect(hypotheticalInputs.length).to.equal(0);
    });

    // it('renders content after user click', () => {
    //     const hypotheticalInputs = container.getElementsByTagName('input')
    //     expect(hypotheticalInputs.length).to.equal(0) // Before click

    //     const button = container.getElementsByTagName('button')[0];
    //     console.log(button)
    //     act(() => {
    //         button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    //     })

    //     expect(hypotheticalInputs.length).to.equal(3);  // After click
    // });
});


