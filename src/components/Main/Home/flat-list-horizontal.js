import React from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import Card from '../../Common/card';

const FlatListHorizontal = (props) => {
  console.log(props.data);
  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => <Card data={item} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  );
};

export default FlatListHorizontal;

const styles = StyleSheet.create({});
