import React from 'react';
import {StyleSheet, Text, View, SectionList, FlatList} from 'react-native';
import TitleSectionList from '../../Common/title-section-list';
import FlatListHorizontal from './flat-list-horizontal';
import {MenuProvider} from 'react-native-popup-menu';

const SectionListHorizontal = (props) => {
  return (
    <MenuProvider style={styles.container}>
      <SectionList
        sections={props.data}
        renderSectionHeader={({section}) => (
          <TitleSectionList title={section.title} textExpand="See all" />
        )}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <FlatListHorizontal data={item} />
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </MenuProvider>
  );
};

export default SectionListHorizontal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    marginBottom: 10,
  },
});
