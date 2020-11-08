import React from 'react';
import Status from './Status.jsx';
import { render } from '@testing-library/react'
import { expect } from 'chai';

describe('<Status>', () => {

    const testDictionary = { delivered: "Delivered"}

    it('renders the expecting content', () => {
      const { container, getByText } = render(<Status status="delivered" dictionary={testDictionary} />);
      const testElement = getByText('✔');
      expect(container.contains(testElement));
    });

    it('does not display the tooltip initially', () => {
        const { container } = render(<Status status="delivered"  dictionary={testDictionary} />);
        const testElement = container.getElementsByClassName('tool-tip-status')[0];
        expect(window.getComputedStyle(testElement).display).to.equal("none");
    });
});

