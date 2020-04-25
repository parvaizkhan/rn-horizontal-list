import React, { useCallback } from 'react';
import HorzontalList from './src/HorizontalList';

import data from './arrivals.json';

export default () => {

    const onPress = useCallback((url) => {
        alert(url);
    }, [])

    return (
        <HorzontalList
            title={'New Arrivals'}
            {...{ data, onPress }}
        />
    );

}
