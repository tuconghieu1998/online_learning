import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BLACK, LIGHT_BLACK, GREEN, GREY} from '../../../globals/config/color';
import {formatHoursToTime} from '../../../globals/helper';

const ListSectionItem = (props) => {
  const {title, duration, numberOrder} = props;
  return (
    <View style={styles.container}>
      {/* {active === true ? (
        <MaterialIcons name="play-circle-outline" color={GREEN} size={24} />
      ) : (
        <MaterialIcons name="lock-outline" color={LIGHT_BLACK} size={24} />
      )} */}

      <Text style={styles.title} numberOfLines={1}>
        {`${numberOrder}. ${title}`}
      </Text>
      <Text style={styles.duration}>{formatHoursToTime(duration)}</Text>
    </View>
  );
};

export default ListSectionItem;

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
    marginRight: 10,
    fontWeight: 'bold',
  },
  duration: {
    color: LIGHT_BLACK,
  },
});
