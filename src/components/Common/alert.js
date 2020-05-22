import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import {TextButton} from '../Common';
import {GREEN, BLACK} from '../../globals/config/color';

const Alert = (props) => {
  const {modalVisible, title, content, buttons} = props;

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          <View>
            <Text style={styles.header}>{title}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={{color: BLACK}}>{content}</Text>
          </View>
          <View style={styles.actionBar}>
            {buttons.map((button, index) => {
              return (
                <View key={index} style={styles.buttonContainer}>
                  <TextButton color={GREEN} onPress={button.onPress}>
                    {button.text}
                  </TextButton>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Alert;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  alertContainer: {
    backgroundColor: 'white',
    borderRadius: 9,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 18,
    color: BLACK,
  },
  contentContainer: {
    paddingTop: 5,
    paddingBottom: 20,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    marginLeft: 10,
  },
});
