import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Card, TitleSectionList} from '../../Common';

const FlatListHorizontal = (props) => {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default FlatListHorizontal;

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingBottom: 5,
  },
});
