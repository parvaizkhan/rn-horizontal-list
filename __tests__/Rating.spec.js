import React from 'react';
import renderer from 'react-test-renderer';

import Rating from '../src/Rating';

const mockProps = {
    containerStyle: {},
    emptyStar: 'ios-star-outline',
    emptyStarColor: '#ffd700',
    fullStar: 'ios-star',
    fullStarColor: '#ffd700',
    halfStar: 'ios-star-half',
    halfStarColor: undefined,
    iconType: 'Ionicons',
    maxStars: 5,
    rating: 0,
    starSize: 40,
    starStyle: {},
}

const getMock = (props = {}) => {
    return (
        <Rating {...props} />
    );
};

describe('Rating', () => {
    it('renders without crashing', () => {
        const rendered = renderer.create(getMock(mockProps)).toJSON();

        expect(rendered).toBeTruthy();
    });
});
