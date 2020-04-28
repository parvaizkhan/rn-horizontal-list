import React, {memo, useCallback} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import propTypes from 'prop-types';

const WIDTH_OFFSET = 10;

export const OverlayCard = memo(props => {
  const {size, onPress} = props;
  const {title, image} = props.item;

  const onPressItem = useCallback(() => {
    onPress(props.item);
  }, [props.item]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPressItem}
      style={[styles.container, {width: size + WIDTH_OFFSET, height: size}]}>
      {!!image && <Image source={image} style={styles.image} />}
      <View style={styles.overlay}>
        <Text style={styles.text}>{(title || '').toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
});

OverlayCard.defaultProps = {
  item: {},
  size: 100,
  onPress: () => null,
};

OverlayCard.propTypes = {
  onPress: propTypes.func,
  size: propTypes.number,
  item: propTypes.shape({
    id: propTypes.string,
    title: propTypes.string,
    image: propTypes.shape({
      uri: propTypes.string.isRequired,
    }),
  }),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 23,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  image: {
    borderRadius: 23,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    padding: 10,
  },
});
