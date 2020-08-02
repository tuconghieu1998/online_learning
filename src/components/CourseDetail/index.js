import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Modal} from 'react-native';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import Introdution from './Introdution/introdution';
import CourseDetailTopNavigation from '../../navigation/CourseDetailTopNavigation';
import {connect} from 'react-redux';
import CourseActions from '../../redux/courseRedux';
import InstructorActions from '../../redux/instructorRedux';

const CourseDetail = (props) => {
  const {id} = props.route.params;
  console.log(id);

  const [data, setData] = useState({});
  const [instructor, setInstructor] = useState({});
  useEffect(() => {
    props.getCourseDetail({id}, (res) => {
      setData(res.payload);
      props.getInstructorDetail({id: res.payload.instructorId}, (res) => {
        setInstructor(res.payload);
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
              title: data.title,
              authors: [instructor],
              duration: data.totalHours,
              released: data.updatedAt,
              rating: data.ratedNumber,
              countVideo: data.videoNumber,
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
  getInstructorDetail: (params, actionSuccess) =>
    dispatch(
      InstructorActions.getInstructorDetailRequest(params, actionSuccess),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
