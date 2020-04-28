import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {memo} from 'react';

const Icons = {
  Entypo,
  Zocial,
  Feather,
  Octicons,
  Fontisto,
  Ionicons,
  EvilIcons,
  AntDesign,
  Foundation,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome5Pro,
  MaterialCommunityIcons,
};

export default memo(({name, type, ...props}) => {
  const IconComponent = Icons[type];

  if (IconComponent) return <IconComponent {...{name}} {...props} />;

  throw new Error('Unknow Icon type');
});
