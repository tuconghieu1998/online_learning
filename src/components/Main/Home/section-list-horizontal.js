import React from 'react';
import {StyleSheet, Text, View, SectionList, FlatList} from 'react-native';
import TitleSectionList from '../../Common/title-section-list';
//import FlatListHorizontal from './flat-list-horizontal';

const SectionListHorizontal = (props) => {
  return (
    <View>
      <SectionList
        sections={props.data}
        renderSectionHeader={({section}) => (
          <TitleSectionList title={section.title} textExpand="See all" />
        )}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            {/* <FlatListHorizontal data={item} /> */}
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default SectionListHorizontal;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
  },
});
