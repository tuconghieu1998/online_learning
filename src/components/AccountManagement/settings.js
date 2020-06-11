import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SettingsItem from './settings-item';
import {MySwitch} from '../Common';

const Settings = () => {
  return (
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
  );
};

export default Settings;

const styles = StyleSheet.create({});
