import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import propTypes from 'prop-types';

import {ListItem} from './ListItem';

export class HorizontalList extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}) {
    const {onPress} = this.props;
    return <ListItem {...{item, onPress}} />;
  }

  keyExtractor(item) {
    return item.id;
  }

  renderSeparator() {
    return <View style={{width: 10}} />;
  }

  render() {
    const {title, textStyle, onPress, ...props} = this.props;

    return (
      <View>
        <Text style={[styles.title, textStyle]}>{title}</Text>
        <FlatList
          horizontal
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          {...props}
        />
      </View>
    );
  }
}

HorizontalList.prototypes = {
  title: propTypes.string,
  onPress: propTypes.func,
};

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
