import React, {useEffect, useState} from 'react';
import {StyleSheet, View, SectionList, Text} from 'react-native';
import ListSectionItem from './list-section-item';
import {LIGHT_GREY} from '../../../globals/config/color';
import {connect} from 'react-redux';
import ListLessonItem from './list-lesson-item';

const ListLesson = (props) => {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    if (props.courseDetail) {
      const newSections = [];
      props.courseDetail.section.map((section) => {
        const newSection = {...section, ...{data: section.lesson}};
        newSections.push(newSection);
      });
      setSections(newSections);
    }
  }, [props.courseDetail]);
  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        renderSectionHeader={({section}) => (
          <ListSectionItem
            title={section.name}
            duration={section.sumHours}
            numberOrder={section.numberOrder}
          />
        )}
        renderItem={({item}) => (
          <ListLessonItem
            title={item.name}
            duration={item.hours}
            active={item.isPreview}
          />
        )}
        keyExtractor={(item, index) => item + index}
        SectionSeparatorComponent={() => <View style={styles.separator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListLesson);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
  },
});
