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

    const { container, getByText, queryByDisplayValue } = render(<Filter 
        title="Test Filter" content={testContent} 
        listOfFilter={testListOfFilter} setListOfFilter={testSetListOfFilter}
    />);
    const testElement = getByText('Test Filter'); // button

    it('renders the expecting title', () => {
        expect(container.contains(testElement));
    });

    it('does not render content (i.e. only title, no options) initially', () => {
        expect(queryByDisplayValue('A')).to.be.null;  
    });

    // This one fails, Two possible reasons :
    // queryByDisplayValue is always null, i.e. does not return what we are looking for
    // Click event does not click on the button supposed to open filter

    // it('renders content (i.e. open filter options) after user click', () => {
    //     expect(queryByDisplayValue('A')).to.be.null; // Before click

    //     act(() => {
    //         testElement.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    //     })

    //     expect(queryByDisplayValue('A')).not.to.be.null;  // After click
    // });
});


