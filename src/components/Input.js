import React, {memo} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from './Icon';

export const Input = memo(props => {
  const {icon, iconStyle, containerStyle, ...inputProps} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Icon {...icon} style={[styles.icon, iconStyle]} />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={'#bcbcbc'}
        {...inputProps}
      />
    </View>
  );
});

Input.defaultProps = {
  icon: {type: 'Ionicons', name: 'ios-search'},
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  icon: {
    fontSize: 22,
    color: '#262626',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
