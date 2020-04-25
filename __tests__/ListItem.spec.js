import React from 'react';
import renderer from 'react-test-renderer';

import { ListItem } from '../src/ListItem';

const mockProps = {
    item: { rating: 0, id: '1', title: 'a', category: 'b', image: { uri: 'c' } },
    size: 150,
    onPress: () => null,
}

const getMock = (props = {}) => {
    return (
        <ListItem {...props} />
    );
};

describe('ListItem', () => {
    it('renders without crashing', () => {
        const rendered = renderer.create(getMock(mockProps)).toJSON();

        expect(rendered).toBeTruthy();
    });
});
