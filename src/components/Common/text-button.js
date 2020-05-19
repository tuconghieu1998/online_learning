import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TextButton = (props) => {
  const {children, size, color} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={{fontSize: size, color: color}}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
