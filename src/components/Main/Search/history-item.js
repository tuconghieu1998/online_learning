import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BLACK} from '../../../globals/config/color';

const HistoryItem = (props) => {
  const {item, onPress, onDelete} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons name="history" size={20} color={BLACK} />
      <Text style={styles.content}>{item.content}</Text>
      <TouchableOpacity style={styles.delete} onPress={onDelete}>
        <MaterialIcons name="clear" size={20} color={BLACK} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 16,
  },
  delete: {
    padding: 5,
  },
});
