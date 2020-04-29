import React, {useMemo, useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {chunk} from 'lodash';
import propTypes from 'prop-types';

import {Tab, FAB} from '.';

const TAB_BAR_HEIGHT = 56;
const DEFAULT_TABS = [
  {name: 'home', icon: {type: 'SimpleLineIcons', name: 'home'}},
  {
    name: 'tickets',
    icon: {type: 'Foundation', name: 'ticket', iconStyle: {fontSize: 24}},
  },
  {
    name: 'movies',
    icon: {type: 'EvilIcons', name: 'play'},
    iconStyle: {fontSize: 28},
  },
  {
    name: 'cinemas',
    icon: {
      type: 'MaterialCommunityIcons',
      name: 'theater',
      iconStyle: {fontSize: 22},
    },
  },
];

const onAction = () => alert('floating action');

export const TabBar = props => {
  const [activeTab, setActiveTab] = useState(props.tabs[0].name);
  const [leftTabs, rightTabs] = useMemo(() => chunk(props.tabs, 2), [
    props.tabs,
  ]);

  const renderTabs = useCallback(
    tab => (
      <Tab
        key={`tab-${tab.name}`}
        onPressTab={setActiveTab}
        active={activeTab === tab.name}
        {...tab}
      />
    ),
    [activeTab],
  );

  return (
    <>
      <FAB onPress={onAction} />
      <View style={styles.container}>
        <View style={styles.right}>{leftTabs.map(renderTabs)}</View>
        <View style={styles.fabPlaceholder}>
          <View style={styles.circle} />
          <View style={styles.circleMask} />
        </View>
        <View style={styles.left}>{rightTabs.map(renderTabs)}</View>
      </View>
    </>
  );
};

TabBar.defaultProps = {
  tabs: DEFAULT_TABS,
};

TabBar.propTypes = {
  tabs: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      icon: propTypes.shape({
        name: propTypes.string,
      }),
    }),
  ),
};

const styles = StyleSheet.create({
  container: {
    height: TAB_BAR_HEIGHT,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#dedede',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 5,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 5,
  },
  fabPlaceholder: {
    width: 80,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#dedede',
    position: 'absolute',
    top: -40,
    zIndex: 2,
  },
  circleMask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#f9f9f9',
    zIndex: 2,
  },
});
