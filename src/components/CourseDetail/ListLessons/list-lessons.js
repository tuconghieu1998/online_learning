import React, {useEffect, useState} from 'react';
import {StyleSheet, View, SectionList} from 'react-native';
import ListSectionItem from './list-section-item';
import {LIGHT_GREY} from '../../../globals/config/color';
import {connect} from 'react-redux';
import ListLessonItem from './list-lesson-item';
import CourseActions from '../../../redux/courseRedux';

const ListLesson = (props) => {
  const [sections, setSections] = useState([]);
  const [isOwnCourse, setOwnCourse] = useState(false);
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
  useEffect(() => {
    setOwnCourse(props.isUserOwnCourse);
  }, [props.isUserOwnCourse]);
  const onSelectLesson = (id, url) => {
    if (isOwnCourse) {
      props.getUrlVideo({courseId: props.courseDetail.id, lessonId: id});
    } else {
      props.setUrlVideo(url, 0, id);
    }
  };
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
            id={item.id}
            title={item.name}
            duration={item.hours}
            active={item.isPreview || isOwnCourse}
            onPress={() => onSelectLesson(item.id, item.videoUrl)}
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
  isUserOwnCourse: state.course.isUserOwnCourse,
});

const mapDispatchToProps = (dispatch) => ({
  getUrlVideo: (params, actionSuccess) =>
    dispatch(CourseActions.getUrlVideoRequest(params, actionSuccess)),
  setUrlVideo: (videoUrl, currentTime, lessonId) =>
    dispatch(CourseActions.setUrlVideoRequest(videoUrl, currentTime, lessonId)),
});

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
