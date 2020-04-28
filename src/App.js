import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {HorizontalList, MediaCard, Header, TabBar} from './components';

import {MEDIA, CINEMAS} from './static-data.json';

const onPressCinema = url => alert(JSON.stringify(url));

const onPressMedia = url => alert(JSON.stringify(url));

renderMediaItem = ({item}) => <MediaCard item={item} onPress={onPressMedia} />;

export default () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        <HorizontalList
          data={CINEMAS}
          title={'Cinemas around you area'}
          onPress={onPressCinema}
        />
        <HorizontalList
          data={MEDIA}
          renderItem={renderMediaItem}
          title={'New releases'}
        />
        <HorizontalList
          data={MEDIA.slice().reverse()}
          title={'You might also want to see this'}
          renderItem={renderMediaItem}
        />
      </ScrollView>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, zIndex: 1},
  scroll: {paddingTop: 20},
});
