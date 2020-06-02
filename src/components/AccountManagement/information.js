import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Avatar} from '../Common';
import {GREEN} from '../../globals/config/color';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Information = (props) => {
  const {name, sub_info, avatar, onPressEdit} = props;
  return (
    <View style={styles.header}>
      <View style={styles.informationItems}>
        <Avatar source={avatar} size={60} />
      </View>
      <View style={styles.informationItems}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.sub_info}>{sub_info}</Text>
      </View>
      {onPressEdit && (
        <View>
          <TouchableOpacity style={styles.editButton} onPress={onPressEdit}>
            <EvilIcons name="pencil" size={24} color={GREEN} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationItems: {
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  sub_info: {
    fontSize: 14,
    color: 'white',
  },
});
