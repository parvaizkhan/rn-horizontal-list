import React, {memo} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import propTypes from 'prop-types';

import {OverlayCard} from './OverlayCard';

const keyExtractor = item => item.id;

const renderSeparator = () => <View style={{width: 10}} />;

export const HorizontalList = props => {
  const {title, textStyle, onPress} = props;

  const renderItem = ({item}) => <OverlayCard {...{item, onPress}} />;

  return (
    <View>
      <Text style={[styles.title, textStyle]}>{title}</Text>
      <FlatList
        horizontal
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        {...props}
      />
    </View>
  );
};

HorizontalList.prototypes = {
  title: propTypes.string,
  onPress: propTypes.func,
};

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
