import React, { useState } from 'react';
import Input from './Input.jsx';
import { render, act } from '@testing-library/react'
import { expect } from 'chai';


describe('<Input>', () => {

    it('renders a checkbox with the expected label', () => {
        let testListOfFilter = {}
        const testSetListOfFilter = (newList) => {
            testListOfFilter = newList;
        }

        const { container, getByText } = render(<Input 
                    type="checkbox" value="testLabel"
                    listOfFilter={testListOfFilter} setListOfFilter={testSetListOfFilter}
                />);
        const input = container.querySelector('input');
        expect(input.type).to.equal("checkbox");

        const label = container.querySelector('label');
        const testLabel = getByText("testLabel")
        expect(label.contains(testLabel));
    });

    it('add a filter when user checks a box', () => {
        let testListOfFilter = {}
        const testSetListOfFilter = (newList) => {
            testListOfFilter = newList;
        }

        const { container } = render(<Input 
                    type="checkbox" value="testLabel"
                    listOfFilter={testListOfFilter} setListOfFilter={testSetListOfFilter}
                />);

        expect(testListOfFilter).to.deep.equal({}); // Before

        const input = container.querySelector('input');
        act(() => {
            input.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        })

        expect(testListOfFilter).to.deep.equal({ testLabel: true}); // After
    });

});
