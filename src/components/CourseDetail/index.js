import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import YoutubePlayer from './VideoPlayer/YoutubePlayer';
import Introdution from './Introdution/introdution';
import CourseDetailTopNavigation from '../../navigation/CourseDetailTopNavigation';
import {connect} from 'react-redux';
import CourseActions from '../../redux/courseRedux';
import {handleValidate} from '../../globals/helper';
import {YOUTUBE} from '../../globals/config/regex';

const CourseDetail = (props) => {
  const {id} = props.route.params;
  const [isYoutubeUrl, setIsYoutubeUrl] = useState(false);

  const [data, setData] = useState({});
  const [instructor, setInstructor] = useState({});
  useEffect(() => {
    props.checkOwnCourse({id}, (response) => {
      props.getCourseDetail({id}, (res) => {
        setData(res.payload);
        setInstructor(res.payload.instructor);
        props.setUrlVideo('');
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (props.url) {
      setIsYoutubeUrl(handleValidate(props.url, YOUTUBE));
    }
  }, [props.url]);

  return (
    <View style={styles.container}>
      {isYoutubeUrl ? (
        <YoutubePlayer url={props.url} />
      ) : (
        <VideoPlayer url={props.url} />
      )}
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

const mapStateToProps = (state) => ({
  url: state.course.videoUrl,
});

const mapDispatchToProps = (dispatch) => ({
  getCourseDetail: (params, actionSuccess) =>
    dispatch(CourseActions.getCourseDetailRequest(params, actionSuccess)),
  checkOwnCourse: (params, actionSuccess) =>
    dispatch(CourseActions.checkOwnCourseRequest(params, actionSuccess)),
  setUrlVideo: (videoUrl) =>
    dispatch(CourseActions.setUrlVideoRequest(videoUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
