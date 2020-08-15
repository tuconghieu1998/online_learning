import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_BLACK, GREEN} from '../../../globals/config/color';
import {formatHoursToTime} from '../../../globals/helper';

const ListLessonItem = (props) => {
  const {title, duration, active, onPress} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!active}
      onPress={onPress}>
      {active ? (
        <MaterialIcons name="play-circle-outline" color={GREEN} size={18} />
      ) : (
        <MaterialIcons name="lock-outline" color={LIGHT_BLACK} size={18} />
      )}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.duration}>{formatHoursToTime(duration)}</Text>
    </TouchableOpacity>
  );
};

export default ListLessonItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    flex: 1,
    color: LIGHT_BLACK,
    fontSize: 12,
    marginRight: 10,
    marginLeft: 10,
  },
  duration: {
    color: LIGHT_BLACK,
    fontSize: 12,
  },
});
