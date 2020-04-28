import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, ViewPropTypes} from 'react-native';
import propTypes from 'prop-types';

import Icon from './Icon';

// A Floating Action Button
export const FAB = memo(props => {
  const {onPress, icon, iconStyle} = props;

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.button} {...{onPress}}>
      <Icon {...icon} style={[styles.icon, iconStyle]} />
    </TouchableOpacity>
  );
});

FAB.defaultProps = {
  icon: {
    type: 'Foundation',
    name: 'ticket',
  },
};

FAB.propTypes = {
  onPress: propTypes.func,
  icon: propTypes.shape({
    name: propTypes.string,
    type: propTypes.string,
  }),
};

const styles = StyleSheet.create({
  button: {
    width: 75,
    height: 75,
    position: 'absolute',
    borderRadius: 75 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffbd00',
    elevation: 6,
    alignSelf: 'center',
    bottom: 22,
  },
  icon: {
    fontSize: 32,
    color: '#fff',
  },
});
