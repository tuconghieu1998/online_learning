import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import Introdution from './Introdution/introdution';
import CourseDetailTopNavigation from '../../navigation/CourseDetailTopNavigation';
import {connect} from 'react-redux';
import CourseActions from '../../redux/courseRedux';

const CourseDetail = (props) => {
  const {id} = props.route.params;

  const [data, setData] = useState({});
  const [instructor, setInstructor] = useState({});
  useEffect(() => {
    props.checkOwnCourse({id}, (response) => {
      props.getCourseDetail({id}, (res) => {
        setData(res.payload);
        setInstructor(res.payload.instructor);
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <VideoPlayer />
      <View style={{flex: 1}}>
        <ScrollView stickyHeaderIndices={[2]}>
          <Introdution
            data={{
              id,
              title: data.title,
              authors: [instructor],
              duration: data.totalHours,
              released: data.updatedAt,
              rating: data.averagePoint,
              countVideo: data.videoNumber,
              countRating: data.ratedNumber,
              description: data.description,
            }}
          />
          <CourseDetailTopNavigation />
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getCourseDetail: (params, actionSuccess) =>
    dispatch(CourseActions.getCourseDetailRequest(params, actionSuccess)),
  checkOwnCourse: (params, actionSuccess) =>
    dispatch(CourseActions.checkOwnCourseRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
