import React from 'react';
import Title from './Title.jsx';
import { render } from '@testing-library/react'
import { expect } from 'chai';

describe('<Title>', () => {

    it('renders the expecting content', () => {
      const { container, getByText } = render(<Title content="Hello, testing world!" />);
      const testElement = getByText('Hello, testing world!');
      expect(container.contains(testElement));
    });

    it('has the expecting style', () => {
        const { container } = render(<Title content="Hello, testing world!" type="welcome" />);
        const title = container.querySelector('h2');
        expect(title.className).to.equal("title welcome");
    });
});

