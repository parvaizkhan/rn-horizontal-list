import React, {memo, useCallback} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';

import {Rating} from './Rating';

export const MediaCard = memo(props => {
  const {size, onPress} = props;
  const {title, image, category, rating} = props.item;

  const onPressItem = useCallback(() => {
    onPress(props.item);
  }, [props.item]);

  return (
    <View style={[styles.container, {width: size}]}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPressItem}>
        <Image
          source={image}
          style={[styles.image, {width: size, height: size}]}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.category} numberOfLines={1} ellipsizeMode={'tail'}>
          {category}
        </Text>
        <Rating starSize={18} rating={rating} containerStyle={{width: '70%'}} />
        <Text
          onPress={onPressItem}
          style={styles.description}
          numberOfLines={2}
          ellipsizeMode={'tail'}>
          {title}
        </Text>
      </View>
    </View>
  );
});

MediaCard.defaultProps = {
  item: {rating: 0},
  size: 150,
  onPress: () => null,
};

MediaCard.propTypes = {
  onPress: propTypes.func,
  size: propTypes.number,
  item: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string,
    rating: propTypes.number,
    category: propTypes.string,
    image: propTypes.shape({
      uri: propTypes.string.isRequired,
    }),
  }),
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    borderRadius: 25,
  },
  category: {
    fontSize: 10,
    color: '#898989',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262628',
  },
});
