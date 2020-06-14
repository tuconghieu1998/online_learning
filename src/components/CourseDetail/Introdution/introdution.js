import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SubText} from '../../Common';
import {Rating} from 'react-native-ratings';
import AuthorTagList from './author-tag-list';
import FuncButton from './func-button';
import {BLACK} from '../../../globals/config/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';

const Introdution = (props) => {
  const {
    title,
    authors,
    level,
    duration,
    released,
    rating,
    countRating,
  } = props.data;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <AuthorTagList authors={authors} />
      <View style={styles.subInfoContainer}>
        <SubText>{`${level}  ‧  ${released}  ‧  ${duration}h   `}</SubText>
        <Rating
          type="custom"
          imageSize={11}
          readonly
          startingValue={rating}
          style={styles.rating}
          ratingBackgroundColor="white"
          tintColor="white"
        />
        <SubText>{' (' + countRating + ')'}</SubText>
      </View>
      <View style={styles.funcButtonContainer}>
        <FuncButton
          name="Bookmark"
          icon={<FontistoIcons name="bookmark" size={24} color={BLACK} />}
        />
        <FuncButton
          name="Add to Chanel"
          icon={<MaterialIcons name="playlist-add" size={24} color={BLACK} />}
        />
        <FuncButton
          name="Download"
          icon={<FontistoIcons name="download" size={24} color={BLACK} />}
        />
      </View>
    </View>
  );
};

export default Introdution;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    color: BLACK,
    marginLeft: 15,
    marginRight: 15,
  },
  subInfoContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  funcButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 25,
    justifyContent: 'space-around',
  },
});
