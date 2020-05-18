import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Card from '../../Common/card';

const FlatListHorizontal = (props) => {
  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => <Card data={item} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

export default FlatListHorizontal;

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
});
