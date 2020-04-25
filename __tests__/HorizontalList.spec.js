import React from 'react';
import renderer from 'react-test-renderer';

import HorizontalList from '../src/HorizontalList';

const mockProps = {
    title: 'a',
    onPress: () => { }
}

const getMock = (props = {}) => {
    return (
        <HorizontalList {...props} />
    );
};

describe('HorizontalList', () => {
    it('renders without crashing', () => {
        const rendered = renderer.create(getMock(mockProps)).toJSON();

        expect(rendered).toBeTruthy();
    });
});
