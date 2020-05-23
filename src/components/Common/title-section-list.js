import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BLACK, LIGHT_BLACK} from '../../globals/config/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TitleSectionList = (props) => {
  const {title, textExpand} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {textExpand && (
        <TouchableOpacity style={styles.more}>
          <Text style={styles.textExpand}>{textExpand}</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={12}
            color={LIGHT_BLACK}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TitleSectionList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    paddingTop: 10,
  },
  title: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: 16,
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textExpand: {
    fontSize: 12,
    color: LIGHT_BLACK,
  },
});
