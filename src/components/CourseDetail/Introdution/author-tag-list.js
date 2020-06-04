import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import AuthorTagItem from './author-tag-item';

const AuthorTagList = (props) => {
  const {authors} = props;
  return (
    <FlatList
      data={authors}
      renderItem={({item}) => (
        <AuthorTagItem name={item.name} avatar={item.avatar} />
      )}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    />
  );
};

export default AuthorTagList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});
