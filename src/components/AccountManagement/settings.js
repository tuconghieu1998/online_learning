import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SettingsItem from './settings-item';
import {MySwitch, BackButton} from '../Common';
import {useNavigation} from '@react-navigation/native';
import {BLACK, GREY} from '../../globals/config/color';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Settings</Text>
      </View>
      <ScrollView>
        <SettingsItem title="Change to dark mode">
          <MySwitch />
        </SettingsItem>
        <SettingsItem title="Require wifi for streaming">
          <MySwitch />
        </SettingsItem>
        <SettingsItem title="Require wifi for downloading">
          <MySwitch />
        </SettingsItem>
        <SettingsItem title="Recommended content notifications">
          <MySwitch />
        </SettingsItem>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: GREY,
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: BLACK,
  },
});
