import React from 'react';
import OrderLine from './OrderLine.jsx';
import { render } from '@testing-library/react'
import { expect } from 'chai';

describe('<OrderLine>', () => {

    const testItem = { status: "delivered", parcel_id: 1, sender: "Sender", 
        location_name: "Location", eta: "2020-10-10blahblah" };


    it('renders the expecting content', () => {
        const { container, getByText} = render(<OrderLine 
            type="full" item={testItem} setItemInModal={() => {}}
            setShowModal={() => {}} dictionary={{}} />);

        const testSenderElement = getByText('Sender, Location');
        const testEtaElement = getByText('2020-10-10');

        expect(container.contains(testSenderElement));
        expect(container.contains(testEtaElement));
    });

    it('renders a "more" button when type="full"', () => {
        const { container, getByText} = render(<OrderLine 
            type="full" item={testItem} setItemInModal={() => {}}
            setShowModal={() => {}} dictionary={{}} />);

        const button = container.querySelector('button');

        expect(button).not.to.be.null;
    });

    it('does not renders a "more" button when type="half"', () => {
        const { container, getByText} = render(<OrderLine 
            type="half" item={testItem} setItemInModal={() => {}}
            setShowModal={() => {}} dictionary={{}} />);

        const button = container.querySelector('button');

        expect(button).to.be.null;
    });
});
