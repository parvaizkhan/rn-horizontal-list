import React, { useCallback } from 'react';
import { HorizontalList } from './src/HorizontalList';

import data from './arrivals.json';

export default () => {

    const onPress = useCallback((url) => {
        alert(url);
    }, [])

    return (
        <HorizontalList
            title={'New Arrivals'}
            {...{ data, onPress }}
        />
    );

}

export * from './src';
