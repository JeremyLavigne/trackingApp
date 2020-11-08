import React from 'react';
import Button from './Button.jsx';
import { render, act } from '@testing-library/react'
import { expect } from 'chai';

describe('<Button>', () => {

    it('renders the expecting content', () => {
      const { container, getByText } = render(<Button content="Hello, testing world!" />);
      const testElement = getByText('Hello, testing world!');
      expect(container.contains(testElement));
    });

    it('has the expecting style', () => {
        const { container } = render(<Button content="Hello, testing world!" type="start" />);
        const button = container.querySelector('button');
        expect(button.className).to.equal("button start");
    });

    it('fires the expecting function', () => {
        let testCount = 0; // Will see if it will changes on click

        const { container } = render(<Button 
                    content="Hello, testing world!" 
                    onClick={() => { testCount = 1;}} 
                />);
        
        expect(testCount).to.equal(0);  // Before click

        const button = container.querySelector('button');
        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        })

        expect(testCount).to.equal(1); // After click
    });
});

