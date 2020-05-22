import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Tag, TitleSectionList} from '../../../Common';

const ListSkills = (props) => {
  const {skills, title} = props;
  return (
    <View style={styles.container}>
      <TitleSectionList title={title} />
      <FlatList
        style={styles.listSkills}
        data={skills}
        renderItem={({item}) => <Tag name={item.name} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListSkills;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 10,
  },
  listSkills: {
    paddingLeft: 10,
  },
});
