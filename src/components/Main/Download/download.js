import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCourses from '../../Courses/ListCourses/list-courses';
import {TextButton, Alert} from '../../Common';
import {GREEN, BLACK} from '../../../globals/config/color';

const DATA = [
  {
    id: '1',
    title: 'Building Applications with React and Flux',
    author: 'Cory Hourse',
    image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
    level: 'Intermediate',
    released: 'thg 8 2019',
    duration: '5h 11m',
    rating: 4.5,
    countRating: 1415,
    size: 857,
  },
  {
    id: '2',
    title: 'React: Getting Started',
    author: 'Samer Buna',
    image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
    level: 'Beginer',
    released: 'thg 8 2019',
    duration: '4h 11m',
    rating: 3,
    countRating: 2206,
    size: 538,
  },
  {
    id: '3',
    title: 'Sever Rendering React Components',
    author: 'Daniel Stern',
    image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
    level: 'Advanced',
    released: 'thg 8 2019',
    duration: '4h 11m',
    rating: 0,
    countRating: 0,
    size: 1035,
  },
];

const Download = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOnPressRemoveAll = () => {
    setModalVisible(true);
  };
  const hideArlet = () => {
    setModalVisible(false);
  };
  // sum all size of item
  let totalSize = DATA.reduce(
    (accumulator, currentValue) => accumulator + currentValue.size,
    0,
  );
  // convert from MB to GB and round to 0.01
  totalSize = Math.round((totalSize / 1024) * 100) / 100;

  return (
    <View style={styles.container}>
      <View style={styles.headerList}>
        <Text style={styles.headerListText}>{`${DATA.length} course${
          DATA.length > 1 && 's'
        } (${totalSize} GB)`}</Text>
        <TextButton onPress={handleOnPressRemoveAll} color={GREEN} size={14}>
          REMOVE ALL
        </TextButton>
      </View>
      <ListCourses data={DATA} />
      <Alert
        modalVisible={modalVisible}
        title="Remove all downloads"
        content="Are you sure you want to remove all downloaded courses?"
        buttons={[{text: 'CANCEL', onPress: hideArlet}, {text: 'REMOVE'}]}
      />
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  headerListText: {
    color: BLACK,
  },
  container: {
    flex: 1,
  },
});
