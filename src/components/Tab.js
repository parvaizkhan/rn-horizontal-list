import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import propTypes from 'prop-types';

import Icon from './Icon';

export const Tab = memo(props => {
  const {name, icon, active, iconStyle} = props;

  const onPress = useCallback(() => {
    props.onPressTab(name);
  }, [name]);

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.tab} {...{onPress}}>
      <Icon
        {...icon}
        style={[styles.icon, active && styles.active, iconStyle]}
      />
      <Text style={[styles.text, active && styles.active]}>
        {(name || '').toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
});

Tab.propTypes = {
  name: propTypes.string,
  icon: propTypes.shape({
    name: propTypes.string,
  }),
  active: propTypes.bool,
};

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: '#898989',
    marginTop: 5,
  },
  icon: {
    fontSize: 20,
    color: '#898989',
  },
  active: {
    color: '#ffbd00',
  },
});
