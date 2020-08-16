import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import YouTube from 'react-native-youtube';
import {getYoutubeVideoID} from '../../../globals/helper';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';

const YoutubePlayer = (props) => {
  const [videoId, setVideoId] = useState('');
  const youTubeRef = useRef(null);
  const [status, setStatus] = useState();
  const [autoSeek, setAutoSeek] = useState(false);
  useEffect(() => {
    if (props.url) {
      setVideoId(getYoutubeVideoID(props.url));
      setAutoSeek(!autoSeek);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.url]);
  useEffect(() => {
    youTubeRef.current.seekTo(Math.floor(props.currentTime));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSeek]);

  useEffect(() => {
    if (status === 'paused') {
      if (props.isUserOwnCourse) {
        youTubeRef.current
          .getCurrentTime()
          .then((currentTime) => {
            props.updateCurrentTimeLearnVideo({
              lessonId: props.lessonId,
              currentTime: currentTime,
            });
          })
          .catch((errorMessage) => {
            this.setState({error: errorMessage});
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  const changeState = (e) => {
    setStatus(e.state);
  };
  return (
    <YouTube
      ref={youTubeRef}
      videoId={videoId} // The YouTube video ID
      apiKey="AIzaSyBzM5ODO2MfkvPcNrIqOLzwv93zPx1sMPU"
      play={true} // control playback of video with true/false
      fullscreen={false} // control whether the video should play in fullscreen or inline
      //loop={true} // control whether the video should loop when ended
      onReady={() => youTubeRef.current.seekTo(Math.floor(props.currentTime))}
      onChangeState={(e) => changeState(e)}
      // onChangeQuality={(e) => this.setState({quality: e.quality})}
      // onError={(e) => this.setState({error: e.error})}
      style={styles.youtube}
    />
  );
};

const mapStateToProps = (state) => ({
  currentTime: state.course.currentTime,
  lessonId: state.course.lessonId,
  isUserOwnCourse: state.course.isUserOwnCourse,
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentTimeLearnVideo: (params, actionSuccess) =>
    dispatch(
      CourseActions.updateCurrentTimeLearnVideoRequest(params, actionSuccess),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlayer);

const styles = StyleSheet.create({
  youtube: {
    alignSelf: 'stretch',
    height: Dimensions.get('window').width * (9 / 16),
  },
});
