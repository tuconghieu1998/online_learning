import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BLACK} from '../../globals/config/color';
import Avatar from './avatar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {ScreenKeys} from '../../globals/constants';
import {connect} from 'react-redux';
import loGet from 'lodash/get';

const Header = (props) => {
  const {title, payload} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.right}>
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => navigation.navigate(ScreenKeys.app.profile)}>
          <Avatar
            source={payload && payload.avatar}
            //source="https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg"
            size={26}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenKeys.app.settings)}>
          <MaterialIcons name="settings" size={26} color={BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  payload: state.user.payload,
});

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
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
  right: {
    flexDirection: 'row',
  },
});
