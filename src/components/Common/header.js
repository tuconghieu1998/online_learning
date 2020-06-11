import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BLACK} from '../../globals/config/color';
import {Avatar} from '../Common';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight: 10}}>
          <Avatar
            source="https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg"
            size={26}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="settings" size={26} color={BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,

    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: BLACK,
  },
});
