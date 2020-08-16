import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Avatar = (props) => {
  const {source, size} = props;
  return (
    <View>
      <Image
        source={{uri: source}}
        style={{height: size, width: size, borderRadius: size / 2}}
        defaultSource={require('../../assets/images/default-avatar.jpg')}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  image: {},
});
