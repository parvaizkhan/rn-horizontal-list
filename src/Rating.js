import React, { Component } from 'react';
import { View, ViewPropTypes, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import EntypoIcons from 'react-native-vector-icons/Entypo';
import ZocialIcons from 'react-native-vector-icons/Zocial';
import FeatherIcons from 'react-native-vector-icons/Feather';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIconsIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIconsIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconTypes = {
  Entypo: EntypoIcons,
  EvilIcons: EvilIconsIcons,
  Feather: FeatherIcons,
  FontAwesome: FontAwesomeIcons,
  Foundation: FoundationIcons,
  Ionicons: IoniconsIcons,
  MaterialIcons: MaterialIconsIcons,
  MaterialCommunityIcons: MaterialCommunityIconsIcons,
  Octicons: OcticonsIcons,
  Zocial: ZocialIcons,
  SimpleLineIcons: SimpleLineIconsIcons,
};

const propTypes = {
  containerStyle: ViewPropTypes.style,
  emptyStar: PropTypes.string,
  emptyStarColor: PropTypes.string,
  emptyStar: PropTypes.string,
  fullStarColor: PropTypes.string,
  emptyStar: PropTypes.string,
  halfStarColor: PropTypes.string,
  maxStars: PropTypes.number,
  rating: PropTypes.number,
  starSize: PropTypes.number,
  starStyle: ViewPropTypes.style,
};

const defaultProps = {
  containerStyle: {},
  emptyStar: 'ios-star-outline',
  emptyStarColor: '#ffd700',
  fullStar: 'ios-star',
  fullStarColor: '#ffd700',
  halfStar: 'ios-star-half',
  halfStarColor: undefined,
  iconType: 'Ionicons',
  maxStars: 5,
  rating: 0,
  starSize: 40,
  starStyle: {},
};

export class Rating extends Component {
  render() {
    const {
      emptyStar,
      emptyStarColor,
      fullStar,
      fullStarColor,
      halfStar,
      halfStarColor,
      iconType,
      maxStars,
      rating,
      starSize,
      starStyle,
    } = this.props;

    const containerStyle = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...StyleSheet.flatten(this.props.containerStyle),
    };

    let roundedRating = Math.round(rating * 2) / 2;

    const starButtons = Array.from({ length: maxStars }, (_, i) => {
      let iconName = emptyStar;
      let lastStarColor = emptyStarColor;

      if (roundedRating >= 1) {
        iconName = fullStar;
        lastStarColor = fullStarColor;
      } else if (roundedRating === 0.5) {
        iconName = halfStar;
        lastStarColor = halfStarColor ? halfStarColor : fullStarColor;
      }

      roundedRating--;

      const Icon = iconTypes[iconType];

      return (
        <Icon
          rating={i + 1}
          name={iconName}
          size={starSize}
          key={`star-${i}`}
          style={starStyle}
          color={lastStarColor}
        />
      );
    });

    return <View style={containerStyle}>{starButtons}</View>;
  }
}

Rating.propTypes = propTypes;
Rating.defaultProps = defaultProps;
