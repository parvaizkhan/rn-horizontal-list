import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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
    width: 70,
    height: 70,
    position: 'absolute',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffbd00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignSelf: 'center',
    bottom: 20,
  },
  icon: {
    fontSize: 30,
    color: '#fff',
  },
});
