import React from 'react';
import OrderDetailModal from './OrderDetailModal.jsx';
import { render } from '@testing-library/react'
import { expect } from 'chai';

import languages from '../../../languages.json'

describe('<OrderDetailModal>', () => {

    const testItem = {
        "status": "delivered",
        "eta": "2020-09-10T09:06:12Z",
        "parcel_id": "8603",
        "sender": "InnoZ",
        "verification_required": true,
        "location_name": "Hanover",
        "location_coordinate_latitude": 12.0675239,
        "location_coordinate_longitude": 123.7223625,
        "user_phone": "670-742-6574",
        "user_name": "Annadiane Figliovanni",
        "notes": "Release L Low Leg Subcu/Fascia, Perc Approach",
        "last_updated": "2020-09-11T06:22:38Z"
        };
    const testDictionary = languages[0]; // english

    it('renders the expecting content', () => {
        const { container, getByText} = render(<OrderDetailModal
            item={testItem}  setShowModal={() => {}} dictionary={testDictionary} />);

        // Option { exact: false } is here because searched text is not alone inside tag (p)
        const testIdElement = getByText('8603');
        const testStatusElement = getByText('Delivered', { exact: false });
        const testVerifElement = getByText('Yes', { exact: false });
        const testNameElement = getByText('Annadiane Figliovanni', { exact: false });
        const testPhoneElement = getByText('670-742-6574', { exact: false });
        const testUpdateElement = getByText('2020-09-11, 06:22', { exact: false });
        const testNotesElement = getByText('Release L Low Leg Subcu/Fascia, Perc Approach', { exact: false });
        const testEtaFullElement = getByText('2020-09-10, 09:06', { exact: false });

        expect(container.contains(testIdElement));
        expect(container.contains(testStatusElement));
        expect(container.contains(testVerifElement));
        expect(container.contains(testNameElement));
        expect(container.contains(testPhoneElement));
        expect(container.contains(testUpdateElement));
        expect(container.contains(testNotesElement));
        expect(container.contains(testEtaFullElement));
    });
});
