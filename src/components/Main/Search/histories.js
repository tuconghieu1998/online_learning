import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {GREY} from '../../../globals/config/color';

const Histories = () => {
  return (
    <View style={styles.container}>
      <Text>Histories</Text>
    </View>
  );
};

export default Histories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopColor: GREY,
    borderTopWidth: 0.5,
  },
});
