import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TextButton = (props) => {
  const {children} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => console.log('abcd')}>
        <Text>{children}</Text>
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
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
