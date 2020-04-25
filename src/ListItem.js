import React, {memo, useCallback} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Rating from 'react-native-star-rating';
import {startCase} from 'lodash';
import propTypes from 'prop-types';

export const ListItem = memo(props => {
  const {size, onPress} = props;
  const {title, image, category, rating} = props.item;

  const onPressItem = useCallback(() => {
    onPress(props.item);
  }, [props.item]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPressItem}
      style={[styles.container, {width: size}]}>
      <Image
        source={image}
        style={[styles.image, {width: size, height: size}]}
      />
      <View>
        <Text style={styles.category} numberOfLines={1} ellipsizeMode={'tail'}>
          {startCase(category.toLowerCase())}
        </Text>
        <Rating
          disabled={true}
          maxStars={5}
          rating={rating}
          fullStar={'ios-star'}
          containerStyle={{width: '70%'}}
          emptyStar={'ios-star-outline'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          fullStarColor={'#ffd700'}
          emptyStarColor={'#ffd700'}
          starSize={18}
        />
        <Text
          style={styles.description}
          numberOfLines={2}
          ellipsizeMode={'tail'}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

ListItem.defaultProps = {
  item: {rating: 0},
  size: 150,
  onPress: () => null,
};

ListItem.propTypes = {
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
