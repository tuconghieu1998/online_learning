import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TitleSectionList = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>{props.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.more}>
        <Text style={styles.textExpand}>{props.textExpand}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={12} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TitleSectionList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textExpand: {
    fontSize: 12,
    color: 'black',
  },
});
