import React from 'react';
import Flag from './Flag.jsx';
import { render, act } from '@testing-library/react'
import { expect } from 'chai';

import testImage from '../../../images/uk-flag.png'

describe('<Flag>', () => {

    it('renders the expecting image', () => {
      const { container } = render(<Flag country="uk" image={testImage} />);
      const img = container.querySelector('img');
      expect(img.alt).to.equal("uk");
      expect(img.src).to.have.string('/images/uk-flag.png');
    });

    it('has an image of 50px width', () => {
        const { container } = render(<Flag country="uk" image={testImage} />);
        const img = container.querySelector('img');
        expect(img.width).to.equal(50);
    });

    it('fires the expecting function', () => {
        let testCount = 0; // Will see if it will changes on click

        const { container } = render(<Flag 
                    onClick={() => { testCount = 1;}} 
                />);
        
        expect(testCount).to.equal(0);  // Before click

        const figure = container.querySelector('figure');
        act(() => {
            figure.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        })

        expect(testCount).to.equal(1); // After click
    });
});
