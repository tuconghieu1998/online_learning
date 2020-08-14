import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Avatar = (props) => {
  const {source, size} = props;
  return (
    <View>
      <Image
        source={{uri: source}}
        style={{height: size, width: size, borderRadius: size / 2}}
        loadingIndicatorSource={require('../../assets/images/loading.png')}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  image: {},
});
