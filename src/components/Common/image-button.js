import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const ImageButton = (props) => {
  const {textAbove, textBelow, height, onPress} = props;
  return (
    <TouchableOpacity
      style={{...styles.container, ...{height: height}}}
      onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-19-98/Code-on-screen-1600x900.jpg',
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{textAbove}</Text>
        <Text style={styles.text}>{textBelow}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  image: {
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
