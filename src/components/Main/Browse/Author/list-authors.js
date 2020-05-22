import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {TitleSectionList} from '../../../Common';
import ListAuthorItem from './list-author-item';

const ListAuthors = (props) => {
  const {title, authors} = props;
  return (
    <View>
      <TitleSectionList title={title} />
      <FlatList
        style={styles.listAuthors}
        data={authors}
        renderItem={({item}) => <ListAuthorItem author={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListAuthors;

const styles = StyleSheet.create({
  listAuthors: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});
