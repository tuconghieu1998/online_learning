import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {GREEN} from '../../globals/config/color';

const MySwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Switch
      trackColor={{false: '#767577', true: GREEN}}
      thumbColor={isEnabled ? GREEN : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default MySwitch;

const styles = StyleSheet.create({});
