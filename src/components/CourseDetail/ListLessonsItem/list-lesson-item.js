import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BLACK, LIGHT_BLACK, GREEN, GREY} from '../../../globals/config/color';

const ListLessonItem = (props) => {
  const {title, duration, active} = props.item;
  const {index} = props;
  return (
    <TouchableOpacity style={styles.container}>
      {active === true ? (
        <MaterialIcons name="play-circle-outline" color={GREEN} size={24} />
      ) : (
        <MaterialIcons name="lock-outline" color={LIGHT_BLACK} size={24} />
      )}

      <Text style={styles.title} numberOfLines={1}>
        {`${index + 1}. ${title}`}
      </Text>
      <Text style={styles.duration}>{getMinutesFromSeconds(duration)}</Text>
    </TouchableOpacity>
  );
  function getMinutesFromSeconds(time) {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  }
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
    color: BLACK,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  duration: {
    color: LIGHT_BLACK,
  },
});
