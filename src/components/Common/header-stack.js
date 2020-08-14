import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackButton from './back-button';
import {useNavigation} from '@react-navigation/native';
import {BLACK} from '../../globals/config/color';

const HeaderStack = (props) => {
  const {title} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderStack;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
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
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 25,
  },
});
