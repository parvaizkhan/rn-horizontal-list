import React, {memo, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Input} from './Input';
import Icon from './Icon';

const avatar = {uri: 'https://picsum.photos/50'};

const onPressMenu = () => alert('menu pressed');

export const Header = memo(() => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffd700', '#ffd700', '#ffbd00']}
        start={{x: 0, y: 0}}
        end={{x: 0.6, y: 0}}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.9} onPress={onPressMenu}>
          <Icon type={'Ionicons'} name={'ios-menu'} style={styles.menu} />
        </TouchableOpacity>
        <View style={styles.avatarWrapper}>
          <Image source={avatar} style={styles.avatar} />
        </View>
      </View>
      <Input
        value={search}
        onChangeText={setSearch}
        placeholder={'Search movie title...'}
        containerStyle={styles.input}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 100,
    zIndex: 2,
  },
  content: {
    height: 76,
    paddingHorizontal: 15,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginHorizontal: 20,
  },
  menu: {
    fontSize: 28,
    color: '#fff',
  },
  avatarWrapper: {
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
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
  avatar: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 110,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    transform: [{scaleX: 1.5}],
  },
});
