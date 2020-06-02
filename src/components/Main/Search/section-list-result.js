import React from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';
import {TitleSectionList} from '../../Common';
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../globals/config/color';
import ListAuthorItem from './list-author-item';

const SectionListResult = (props) => {
  const {data} = props;
  return (
    <View style={{marginBottom: 30}}>
      <SectionList
        sections={data}
        renderSectionHeader={({section}) => (
          <View style={styles.headerContainer}>
            <TitleSectionList title={section.title} textExpand="See all" />
          </View>
        )}
        renderItem={({item}) =>
          item.avatar ? (
            <ListAuthorItem item={item} />
          ) : (
            <ListCoursesItem item={item} />
          )
        }
        keyExtractor={(item, index) => item + index}
        SectionSeparatorComponent={() => <View style={styles.separator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default SectionListResult;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
    marginLeft: 15,
    marginRight: 15,
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
});
