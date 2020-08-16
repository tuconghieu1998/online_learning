import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_BLACK, GREEN} from '../../../globals/config/color';
import {formatHoursToTime} from '../../../globals/helper';
import {connect} from 'react-redux';
import {color} from 'react-native-reanimated';

const ListLessonItem = (props) => {
  const {id, title, duration, active, onPress} = props;
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

      <Text
        style={{
          ...styles.title,
          ...{color: id === props.lessonId ? GREEN : LIGHT_BLACK},
        }}>
        {title}
      </Text>
      <Text
        style={{
          ...styles.duration,
          ...{color: id === props.lessonId ? GREEN : LIGHT_BLACK},
        }}>
        {formatHoursToTime(duration)}
      </Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  lessonId: state.course.lessonId,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListLessonItem);

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
