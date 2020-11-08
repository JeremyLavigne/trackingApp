import { expect } from 'chai';

import filterWithId from './filterWithId'
import applyFilters from './applyFilters'
import checkIfOneFilterIsActive from './checkIfOneFilterIsActive'

describe('Utils functions', () => {

    describe('Filter with Id', () => {

        it('returns true if id have the same first number', () => {
            const testItem = { parcel_id: "8945" };
            const testSearchedId = "8";
            const result = filterWithId(testItem, testSearchedId);
            expect(result).to.be.true;
        });

        it('returns false if id have the same second number but not the first one', () => {
            const testItem = { parcel_id: "8945" };
            const testSearchedId = "19";
            const result = filterWithId(testItem, testSearchedId);
            expect(result).to.be.false;
        });

        it('returns false if id is different', () => {
            const testItem = { parcel_id: "8945" };
            const testSearchedId = "2222";
            const result = filterWithId(testItem, testSearchedId);
            expect(result).to.be.false;
        });
    });

    describe('Apply filters', () => {

        it('returns true if one filter set on true match item property', () => {
            const testListOfFilter = { filter1: true, filter2: false, filter3: false };
            const testItem = { status: "something", sender: "filter1", location_name: "filter3"}
            const result = applyFilters(testItem, testListOfFilter)
            expect(result).to.be.true;
        });

        it('returns false if item property is not in the list of filter', () => {
            const testListOfFilter = { filter1: true, filter2: false};
            const testItem = { status: "something", sender: "something else", location_name: "filter3"}
            const result = applyFilters(testItem, testListOfFilter)
            expect(result).to.be.false;
        });
    });

    describe('Check if one filter is active', () => {

        it('return true if only one filter is set on true', () => {
            const testListOfFilter = { filter1: true, filter2: false, filter3: false };
            const result = checkIfOneFilterIsActive(testListOfFilter)
            expect(result).to.be.true;
        });

        it('return false if all filters are set on false', () => {
            const testListOfFilter = { filter1: false, filter2: false, filter3: false };
            const result = checkIfOneFilterIsActive(testListOfFilter)
            expect(result).to.be.false;
        });

        it('return false if empty list', () => {
            const testListOfFilter = {};
            const result = checkIfOneFilterIsActive(testListOfFilter)
            expect(result).to.be.false;
        });
    });
});
