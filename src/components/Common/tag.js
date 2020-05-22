import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LIGHT_GREY, BLACK} from '../../globals/config/color';

const Tag = (props) => {
  const {name} = props;
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={{color: BLACK}}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GREY,
    borderRadius: 15,
    marginRight: 5,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
